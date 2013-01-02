function calculateTotalAmount() {
  var total = 0;

  $("tr.expense").each(function() {
    var amountText = $(".us-amount", this).text();
    var amount = parseFloat(amountText);
    if (isNaN(amount))
      alert("NOT AN AMOUNT: " + amountText);
    total += amount;
  });
  $("#total").text(total.toFixed(2));
}

function assignIds() {
  $("tr.expense").each(function(i) {
    $(".id", this).text(i+1);
  });
}

function showReceipts() {
  $("tr.expense").each(function() {
    var receipts = $(".description img", this);
    var id = $(".id", this).text();
    var section = $(
      '<section class="receipts"><h2 id="' + id + '">Paperwork for ' +
      'item #' + id + '</h2><div class="description"></div></section>'
      )
      .append(receipts)
      .appendTo(document.body);
    
    $(".description", section).append($(".description", this).clone());
    $(".id", this).wrapInner('<a href="#' + id + '"></a>');
  });
}

$(function() {
  calculateTotalAmount();
  assignIds();
  showReceipts();
});
