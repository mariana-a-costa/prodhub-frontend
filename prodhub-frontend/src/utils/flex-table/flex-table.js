import './table.css'
const FlexTable = () => {
  return (
    <div class="table-container">
      <div class="table-row heading">
        <div class="row-item">Category 1</div>
        <div class="row-item">Category 2</div>
        <div class="row-item">Category 3</div>
        <div class="row-item">Category 4</div>
        <div class="row-item">Category 5</div>
      </div>
      <div class="table-row">
        <div class="row-item">Item 1</div>
        <div class="row-item">Item 2</div>
        <div class="row-item">Item 3</div>
        <div class="row-item">Item 4</div>
        <div class="row-item">Item 5</div>
      </div>
      <div class="table-row">
        <div class="row-item">Item 1</div>
        <div class="row-item">Item 2</div>
        <div class="row-item">Item 3</div>
        <div class="row-item">Item 4</div>
        <div class="row-sub-container">
          <div class="row-item">Sub item 1</div>
          <div class="row-item">Sub item 2</div>
        </div>
      </div>
    </div>
  )
}
