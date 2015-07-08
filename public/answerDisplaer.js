[].forEach.call($(":input[name=radio1]"), function(item, i) {
  item.onclick = function () {
      $(":input[id=answer1]").prop("value", item.value);
  };
});
[].forEach.call($(":input[name=radio2]"), function(item, i) {
  item.onclick = function () {
      $(":input[id=answer1]").prop("value", item.value);
  };
});
[].forEach.call($(":input[name=checkbox1]"), function(item, i) {
  item.onclick = function () {
      var ans = '';
      $(':input[name=checkbox1]').each(function () {
        ans += this.checked ? this.value : '';
      })
      $(":input[id=answer3]").prop("value", ans);
  };
});
[].forEach.call($(":input[name=checkbox2]"), function(item, i) {
  item.onclick = function () {
    var ans = '';
    $(':input[name=checkbox2]').each(function () {
      ans += this.checked ? this.value : '';
    })
    $(":input[id=answer4]").prop("value", ans);
  };
});
