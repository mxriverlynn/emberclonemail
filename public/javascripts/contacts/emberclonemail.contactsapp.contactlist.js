// Backbone.EmberCloneMail
// A reference application for Backbone.Marionette
//
// Copyright (C)2012 Derick Bailey, Muted Solutions, LLC
// Distributed Under MIT License
//
// Documentation and Full License Available at:
// http://github.com/derickbailey/emberclonemail

// Contacts List
// -------------

// Manage the display of, and interaction with, the list of contacts.
EmberCloneMail.ContactsApp.ContactList = (function(EmberCloneMail, Backbone){
  var ContactList = {};

  // Contact List Views
  // ------------------

  // Display an individual contact in the list.
  var ContactItemView = EmberCloneMail.ItemView.extend({
    tagName: "li",
    template: "#contact-item-template"
  });

  // Display the list of contacts.
  var ContactListView = EmberCloneMail.CollectionView.extend({
    tagName: "ul",
    className: "contact-list",
    itemView: ContactItemView
  });

  // Public API
  // ----------

  // Show the list of contacts.
  ContactList.show = function(contacts){
    var contactsView = new ContactListView({
      collection: contacts
    });
    EmberCloneMail.mainRegion.show(contactsView);
  }

  return ContactList;
})(EmberCloneMail, Backbone);
