(function($) {
  $(document).ready(function() {
    $(".search > input").keydown(function(evt) {
      var el = this;
      setTimeout(function() {
        var txt = $(el).val();
        $(".icons .icon").each(function(idx, icon) {
          var parent = $(icon).parent();
          var name = parent.data("name");
          if (name.indexOf(txt) >= 0) {
            parent.show();
          } else {
            parent.hide();
          }
        });
      });
    });
  });
}(jQuery));
