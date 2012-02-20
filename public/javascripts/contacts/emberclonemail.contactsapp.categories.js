// Backbone.EmberCloneMail
// A reference application for Backbone.Marionette
//
// Copyright (C)2012 Derick Bailey, Muted Solutions, LLC
// Distributed Under MIT License
//
// Documentation and Full License Available at:
// http://github.com/derickbailey/emberclonemail

// Contact Categories
// --------

// Manage the list of categories, and the interactions with them,
// for the contacts app.
EmberCloneMail.ContactsApp.Categories = (function(EmberCloneMail, Backbone){
  var Categories = {};

  // Categories Views
  // ----------------

  // Displays the hard coded list of contact categories, from
  // the view template.
  Categories.ContactCategoriesView = EmberCloneMail.ItemView.extend({
    template: "#contact-categories-view-template",

    events: {
      "click a": "categoryClicked"
    },

    categoryClicked: function(e){
      e.preventDefault();
    }
  });

  // Public API
  // ----------
  
  // Show the list of contact categories in the 
  // left hand navigation.
  Categories.show = function(){
    EmberCloneMail.navigationRegion.show(new Categories.ContactCategoriesView());
  }

  return Categories;
})(EmberCloneMail, Backbone);
