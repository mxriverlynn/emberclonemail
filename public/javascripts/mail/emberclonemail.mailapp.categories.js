// Backbone.EmberCloneMail
// A reference application for Backbone.Marionette
//
// Copyright (C)2012 Derick Bailey, Muted Solutions, LLC
// Distributed Under MIT License
//
// Documentation and Full License Available at:
// http://github.com/derickbailey/emberclonemail

// MailApp.Categories
// ------------------

// The list of categories for email. Right now this 
// displayed a hard coded list, stuffed directly in
// the HTML template. 
EmberCloneMail.MailApp.Categories = (function(EmberCloneMail, Backbone, $){
  var Categories = {};

  // The category model and collection
  var Category = Backbone.Model.extend({});
  var CategoryCollection = Backbone.Collection.extend({
    url: "/categories",
    model: Category
  });

  // Mail Category Views
  // -------------------

  // The view to show the list of categories. The view
  // template includes the standard categories hard coded
  // and then it renders the individual categories, too.
  Categories.CategoriesView = EmberCloneMail.ItemView.extend({
    template: "#mail-categories-view-template",

    events: {
      "click a": "categoryClicked"
    },

    // Raise an event aggregator event, to say that a
    // particular category was clicked, and let the other
    // parts of the system figure out how to respond.
    categoryClicked: function(e){
      e.preventDefault();
      var category = $(e.currentTarget).data("category");
      if (category){
        EmberCloneMail.vent.trigger("mail:category:show", category);
      } else {
        EmberCloneMail.vent.trigger("mail:show");
      }
    }
  });

  // Mail Categories Public API
  // --------------------------
  
  // Show the mail categories list
  Categories.showCategoryList = function(){
    var categoryView = new Categories.CategoriesView({
      collection: Categories.categoryCollection
    })
    EmberCloneMail.navigationRegion.show(categoryView);
  }

  // Mail Categories Initializer
  // ---------------------------

  // Get the list of categories on startup and hold
  // then in memory, so we can render them on to the
  // screen when we need to.
  EmberCloneMail.addInitializer(function(){
    Categories.categoryCollection = new CategoryCollection();
    Categories.categoryCollection.fetch();
  });

  return Categories;
})(EmberCloneMail, Backbone, jQuery);
