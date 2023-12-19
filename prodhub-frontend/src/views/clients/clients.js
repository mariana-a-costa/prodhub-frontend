import React from 'react'

import { Helmet } from 'react-helmet'
import useClientApi from '../../hooks/ClientApi';
import './clients.css'
import './table.css'

const getTag = (tag) => {
  switch (tag) {
    case 'pending':
      return (
          <span className="tag-status" id='pending'>Pending</span>
      )
    case 'approved':
      return (
        <span className="tag-status">
          <span className="tag-status" id='approved'>Approved</span>
        </span>
      )
    case 'paused':
      return (
        <span className="tag-status">
          <span className="tag-status" id='paused'>Paused</span>
        </span>
      )
    default:
      return <span className="">--</span>;
  };
};

const ClientsViewTable = ({ clients }) => {
  return (
    <div className="table-container">
      <div className="table-row heading">
        <div className="row-item">Nome</div>
        <div className="row-item">Telemovel</div>
        <div className="row-item">Email</div>
        <div className="row-item">Projeto</div>
        <div className="row-item">Estado</div>
      </div>
      {clients.map((client) => (
        <div key={client.clientID} className="table-row">
          <div className="row-item">{client.firstName} {client.lastName}</div>
          <div className="row-item">{client.phoneNumber}</div>
          <div className="row-item">{client.email}</div>
          <div className="row-item"> -- </div>
          <div className="row-item">{getTag('approved')}</div>
        </div>
      ))}
    </div>
  );
};  


const Clients = (props) => {
  const { clients } = useClientApi();
  return (
    <div className="design2-container">
      <Helmet>
        <title>Design2 - ProdHub</title>
        <meta property="og:title" content="Design2 - ProdHub" />
      </Helmet>
      <div className="design2-dashboard-design">
        <div className="design2-dashboard">
          <span className="design2-text">
            <span>Clients</span>
          </span>
        </div>
        <div className="design2-header">
          <div className="design2-search-bar">
            <img
              alt="Icon16pxSearchI502"
              src="/external/icon16pxsearchi502-8vh.svg"
              className="design2-icon16px-search"
            />
            <span className="design2-text02">
              <span>Search</span>
            </span>
          </div>
          <div className="design2-right-side">
            <div className="design2-icon-bell">
              <div className="design2-group">
                <img
                  alt="VectorI502"
                  src="/external/vectori502-4s2.svg"
                  className="design2-vector"
                />
                <img
                  alt="VectorI502"
                  src="/external/vectori502-8vpf.svg"
                  className="design2-vector1"
                />
              </div>
            </div>
            <div className="design2-user">
              <div className="design2-left-side">
                <div className="design2-name">
                  <span className="design2-text04">
                    <span>Johny Larsen</span>
                  </span>
                  <span className="design2-text06">
                    <span>Admin</span>
                  </span>
                </div>
              </div>
              <img
                alt="Icon16pxDropdownI502"
                src="/external/icon16pxdropdowni502-mc9.svg"
                className="design2-icon16px-dropdown"
              />
            </div>
          </div>
        </div>
        <div className="design2-sidebar">
          <div className="design2-top">
            <div className="design2-logo">
              <img
                alt="LogoI502"
                src="/external/logoi502-hy9l.svg"
                className="design2-logo1"
              />
              <span className="design2-text08">
                <span className="design2-text09">Manager</span>
                <span>Pro</span>
              </span>
            </div>
            <div className="design2-navigation">
              <div className="design2-nav">
                <img
                  alt="IconDashboardI502"
                  src="/external/icondashboardi502-b4ok.svg"
                  className="design2-icon-dashboard"
                />
                <span className="design2-text11">
                  <span>Dashboard</span>
                </span>
              </div>
              <div className="design2-nav01">
                <div className="design2-left-side1">
                  <img
                    alt="IconOrdersI502"
                    src="/external/iconordersi502-1r5l.svg"
                    className="design2-icon-orders"
                  />
                  <span className="design2-text13">
                    <span>Orders</span>
                  </span>
                </div>
                <img
                  alt="Icon16pxDropdownI502"
                  src="/external/icon16pxdropdowni502-379.svg"
                  className="design2-icon16px-dropdown1"
                />
              </div>
              <div className="design2-nav02">
                <div className="design2-left-side2">
                  <img
                    alt="IconProfileI502"
                    src="/external/iconprofilei502-90ti.svg"
                    className="design2-icon-profile"
                  />
                  <span className="design2-text15">
                    <span>Clients</span>
                  </span>
                </div>
                <img
                  alt="Icon16pxDropdownI502"
                  src="/external/icon16pxdropdowni502-x6c5.svg"
                  className="design2-icon16px-dropdown2"
                />
              </div>
              <div className="design2-nav03">
                <div className="design2-left-side3">
                  <img
                    alt="IconItemsI502"
                    src="/external/iconitemsi502-rmc.svg"
                    className="design2-icon-items"
                  />
                  <span className="design2-text17">
                    <span>Items</span>
                  </span>
                </div>
                <img
                  alt="Icon16pxDropdownI502"
                  src="/external/icon16pxdropdowni502-hfrm.svg"
                  className="design2-icon16px-dropdown3"
                />
              </div>
              <div className="design2-nav04">
                <div className="design2-left-side4">
                  <img
                    alt="IconTransactionsI502"
                    src="/external/icontransactionsi502-6nyu.svg"
                    className="design2-icon-transactions"
                  />
                  <span className="design2-text19">
                    <span>Tranactions</span>
                  </span>
                </div>
                <img
                  alt="Icon16pxDropdownI502"
                  src="/external/icon16pxdropdowni502-vpar.svg"
                  className="design2-icon16px-dropdown4"
                />
              </div>
              <div className="design2-nav05">
                <img
                  alt="IconReportsI502"
                  src="/external/iconreportsi502-pcxaw.svg"
                  className="design2-icon-reports"
                />
                <span className="design2-text21">
                  <span>Reports</span>
                </span>
              </div>
              <div className="design2-nav06">
                <img
                  alt="IconMessagesI502"
                  src="/external/iconmessagesi502-oe8o.svg"
                  className="design2-icon-messages"
                />
                <span className="design2-text23">
                  <span>Messages</span>
                </span>
              </div>
              <div className="design2-nav07">
                <img
                  alt="IconSupportI502"
                  src="/external/iconsupporti502-j6df.svg"
                  className="design2-icon-support"
                />
                <span className="design2-text25">
                  <span>Support</span>
                </span>
              </div>
              <div className="design2-nav08">
                <img
                  alt="IconSettingsI502"
                  src="/external/iconsettingsi502-9cgr.svg"
                  className="design2-icon-settings"
                />
                <span className="design2-text27">
                  <span>Settings</span>
                </span>
              </div>
            </div>
          </div>
          <div className="design2-low-navigation">
            <div className="design2-nav09">
              <img
                alt="IconReportI502"
                src="/external/iconreporti502-ct1h.svg"
                className="design2-icon-report"
              />
              <span className="design2-text29">Report Bug</span>
            </div>
            <div className="design2-nav10">
              <img
                alt="IconFAQI502"
                src="/external/iconfaqi502-9hhz.svg"
                className="design2-icon-faq"
              />
              <span className="design2-text30">
                <span>FAQ</span>
              </span>
            </div>
          </div>
        </div>
        <ClientsViewTable clients={clients} />
      </div>
    </div>
  )
}

export default Clients
