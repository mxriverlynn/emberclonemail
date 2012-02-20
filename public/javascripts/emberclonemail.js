// Backbone.EmberCloneMail
// A reference application for Backbone.Marionette
//
// Copyright (C)2012 Derick Bailey, Muted Solutions, LLC
// Distributed Under MIT License
//
// Documentation and Full License Available at:
// http://github.com/derickbailey/emberclonemail

EmberCloneMail = Ember.Application.create();

EmberCloneMail.Email = Ember.Object.extend({});

EmberCloneMail.EmailListView = Em.View.extend({
  classNames: ["email-list", "email-view"],
  templateName: "email-list-view"
});

EmberCloneMail.EmailPreview = Em.View.extend({
  templateName: "email-preview"
});

EmberCloneMail.emailController = Ember.ArrayController.create({
  content: [],

  loadEmail: function(){
    var that = this;
    $.ajax({
      url: "/email",
      dataType: "json",

      success: function(emailList){
        var email = emailList.map(function(emailData){
          return EmberCloneMail.Email.create(emailData);
        });
        that.set("content", email);
      }
    });
  }
});

EmberCloneMail.emailController.loadEmail();
