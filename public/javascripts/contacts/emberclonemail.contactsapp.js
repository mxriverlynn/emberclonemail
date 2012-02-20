// Backbone.EmberCloneMail
// A reference application for Backbone.Marionette
//
// Copyright (C)2012 Derick Bailey, Muted Solutions, LLC
// Distributed Under MIT License
//
// Documentation and Full License Available at:
// http://github.com/derickbailey/emberclonemail

// Contacts
// --------

// Manage the list of contacts and the categories for
// the contacts. Limited functionality at this point,
// but slowly adding more.
EmberCloneMail.ContactsApp = (function(EmberCloneMail, Backbone){
  var Contacts = {};

  // Contact Model And Collection
  // -----------------------------

  Contacts.Contact = Backbone.Model.extend({});

  Contacts.ContactCollection = Backbone.Collection.extend({
    url: "/contacts",
    model: Contacts.Contact
  });

  // Public API
  // ----------
  
  // Show the contact list and the categories.
  Contacts.showContactList = function(){
    EmberCloneMail.ContactsApp.ContactList.show(Contacts.contacts);
    EmberCloneMail.ContactsApp.Categories.show();
    EmberCloneMail.vent.trigger("contacts:show");
  };

  // Initializer
  // -----------
  
  EmberCloneMail.addInitializer(function(){
    Contacts.contacts = new Contacts.ContactCollection();
    Contacts.contacts.fetch();
  });
  
  return Contacts;
})(EmberCloneMail, Backbone);

