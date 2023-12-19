import React from 'react';
import { Helmet } from 'react-helmet';
import useClientApi from '../../hooks/ClientApi';
import './clients.css';

const ClientsViewTable = () => {
  const { clients, loading, error } = useClientApi();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="clients-table">
      <Helmet>
        <title>Clients View</title>
      </Helmet>

      <div className="table-header">
        <div className="table-header-row">
          <span className="table-header-text">
            <span>Nome</span>
          </span>
          <span className="table-header-text">
            <span>Projeto</span>
          </span>
          <span className="table-header-text">
            <span>Telemovel</span>
          </span>
          <span className="table-header-text">
            <span>Email</span>
          </span>
          <span className="table-header-text">
            <span>Status</span>
          </span>
        </div>
        <img
          alt="Line9I502"
          src="/external/line9i502-kg8f.svg"
          className="clients-line9"
        />
      </div>

      <div className="table-body">
        {clients.map((client) => (
          <div key={client.clientId} className="table-body-row">
            <span className="table-row-text-tertiary">
              <span>{client.clientId}</span>
            </span>
            <span className="table-row-text-primary">
              <span>{client.firstName} {client.lastName}</span>
            </span>
            <span className="table-row-text-primary">{client.qty}</span>
            <span className="table-row-text-tertiary">
              <span>{client.orderDate}</span>
            </span>
            <span className="table-row-text-secondary">
              <span>{client.recent}</span>
            </span>
            {/* missing status tag with className="table-row-tag-status" */}
          </div>
        ))}
      </div>
    </div>
  );
};

const getStatusClass = (status) => {
  // Add logic to determine the appropriate class based on the status
  // You can customize this based on your specific requirements
  switch (status) {
    case 'Pending':
      return 'pending';
    case 'Approved':
      return 'approved';
    case 'Paused':
      return 'paused';
    default:
      return '';
  }
};


const Clients = (props) => {
  return (
    <div className="clients-container">
      <Helmet>
        <title>clients - ProdHub</title>
        <meta property="og:title" content="clients - ProdHub" />
      </Helmet>
      <div className="clients-dashboard-design">
        <div className="clients-dashboard">
          <span className="clients-text">
            <span>Clients</span>
          </span>
        </div>
        <div className="clients-header">
          <div className="clients-search-bar">
            <img
              alt="Icon16pxSearchI502"
              src="/external/icon16pxsearchi502-8vh.svg"
              className="clients-icon16px-search"
            />
            <span className="clients-text02">
              <span>Search</span>
            </span>
          </div>
          <div className="clients-right-side">
            <div className="clients-icon-bell">
              <div className="clients-group">
                <img
                  alt="VectorI502"
                  src="/external/vectori502-4s2.svg"
                  className="clients-vector"
                />
                <img
                  alt="VectorI502"
                  src="/external/vectori502-8vpf.svg"
                  className="clients-vector1"
                />
              </div>
            </div>
            <div className="clients-user">
              <div className="clients-left-side">
                <div className="clients-name">
                  <span className="clients-text04">
                    <span>Johny Larsen</span>
                  </span>
                  <span className="clients-text06">
                    <span>Admin</span>
                  </span>
                </div>
              </div>
              <img
                alt="Icon16pxDropdownI502"
                src="/external/icon16pxdropdowni502-mc9.svg"
                className="clients-icon16px-dropdown"
              />
            </div>
          </div>
        </div>
        <div className="clients-sidebar">
          <div className="clients-top">
            <div className="clients-logo">
              <img
                alt="LogoI502"
                src="/external/logoi502-hy9l.svg"
                className="clients-logo1"
              />
              <span className="clients-text08">
                <span className="clients-text09">Manager</span>
                <span>Pro</span>
              </span>
            </div>
            <div className="clients-navigation">
              <div className="clients-nav">
                <img
                  alt="IconDashboardI502"
                  src="/external/icondashboardi502-b4ok.svg"
                  className="clients-icon-dashboard"
                />
                <span className="clients-text11">
                  <span>Dashboard</span>
                </span>
              </div>
              <div className="clients-nav01">
                <div className="clients-left-side1">
                  <img
                    alt="IconOrdersI502"
                    src="/external/iconordersi502-1r5l.svg"
                    className="clients-icon-orders"
                  />
                  <span className="clients-text13">
                    <span>Orders</span>
                  </span>
                </div>
                <img
                  alt="Icon16pxDropdownI502"
                  src="/external/icon16pxdropdowni502-379.svg"
                  className="clients-icon16px-dropdown1"
                />
              </div>
              <div className="clients-nav02">
                <div className="clients-left-side2">
                  <img
                    alt="IconProfileI502"
                    src="/external/iconprofilei502-90ti.svg"
                    className="clients-icon-profile"
                  />
                  <span className="clients-text15">
                    <span>Clients</span>
                  </span>
                </div>
                <img
                  alt="Icon16pxDropdownI502"
                  src="/external/icon16pxdropdowni502-x6c5.svg"
                  className="clients-icon16px-dropdown2"
                />
              </div>
              <div className="clients-nav03">
                <div className="clients-left-side3">
                  <img
                    alt="IconItemsI502"
                    src="/external/iconitemsi502-rmc.svg"
                    className="clients-icon-items"
                  />
                  <span className="clients-text17">
                    <span>Items</span>
                  </span>
                </div>
                <img
                  alt="Icon16pxDropdownI502"
                  src="/external/icon16pxdropdowni502-hfrm.svg"
                  className="clients-icon16px-dropdown3"
                />
              </div>
              <div className="clients-nav04">
                <div className="clients-left-side4">
                  <img
                    alt="IconTransactionsI502"
                    src="/external/icontransactionsi502-6nyu.svg"
                    className="clients-icon-transactions"
                  />
                  <span className="clients-text19">
                    <span>Tranactions</span>
                  </span>
                </div>
                <img
                  alt="Icon16pxDropdownI502"
                  src="/external/icon16pxdropdowni502-vpar.svg"
                  className="clients-icon16px-dropdown4"
                />
              </div>
              <div className="clients-nav05">
                <img
                  alt="IconReportsI502"
                  src="/external/iconreportsi502-pcxaw.svg"
                  className="clients-icon-reports"
                />
                <span className="clients-text21">
                  <span>Reports</span>
                </span>
              </div>
              <div className="clients-nav06">
                <img
                  alt="IconMessagesI502"
                  src="/external/iconmessagesi502-oe8o.svg"
                  className="clients-icon-messages"
                />
                <span className="clients-text23">
                  <span>Messages</span>
                </span>
              </div>
              <div className="clients-nav07">
                <img
                  alt="IconSupportI502"
                  src="/external/iconsupporti502-j6df.svg"
                  className="clients-icon-support"
                />
                <span className="clients-text25">
                  <span>Support</span>
                </span>
              </div>
              <div className="clients-nav08">
                <img
                  alt="IconSettingsI502"
                  src="/external/iconsettingsi502-9cgr.svg"
                  className="clients-icon-settings"
                />
                <span className="clients-text27">
                  <span>Settings</span>
                </span>
              </div>
            </div>
          </div>
          <div className="clients-low-navigation">
            <div className="clients-nav09">
              <img
                alt="IconReportI502"
                src="/external/iconreporti502-ct1h.svg"
                className="clients-icon-report"
              />
              <span className="clients-text29">Report Bug</span>
            </div>
            <div className="clients-nav10">
              <img
                alt="IconFAQI502"
                src="/external/iconfaqi502-9hhz.svg"
                className="clients-icon-faq"
              />
              <span className="clients-text30">
                <span>FAQ</span>
              </span>
            </div>
          </div>
        </div>
        <div className="clients-recent-orders">
          <ClientsViewTable />
        </div>
      </div>
    </div>
  )
}

export default Clients
