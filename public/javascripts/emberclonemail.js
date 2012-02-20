// Backbone.EmberCloneMail
// A reference application for Backbone.Marionette
//
// Copyright (C)2012 Derick Bailey, Muted Solutions, LLC
// Distributed Under MIT License
//
// Documentation and Full License Available at:
// http://github.com/derickbailey/emberclonemail

EmberCloneMail = Ember.Application.create();

EmberCloneMail.Email = Ember.Object.extend({
});

EmberCloneMail.EmailListView = Em.View.extend({
  classNames: ["email-list", "email-view"],
  templateName: "email-list-view"
});

EmberCloneMail.EmailPreview = Em.View.extend({
  templateName: "email-preview"
});

EmberCloneMail.emailController = Ember.ArrayController.create({
  content: [{from: "Bob Jone", subject: "Did you get that thing I sent you?", date: "10/10/201"}]
});
