EmberCloneMail.Email = Ember.Object.extend({});

EmberCloneMail.emailController = Ember.Object.create({
  showEmail: function(view){
    var email = view.get("content");
    EmberCloneMail.emailView = EmberCloneMail.EmailView.create({
      content: email
    });
    EmberCloneMail.emailView.replaceIn("#main");
  }
});

EmberCloneMail.emailListController = Ember.ArrayController.create({
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

EmberCloneMail.EmailListView = Em.View.extend({
  tagName: "ul",
  classNames: ["email-list", "email-view"],
  templateName: "email-list-view"
});

EmberCloneMail.EmailPreview = Em.View.extend(Ember.TargetActionSupport, {
  templateName: "email-preview",

  click: function(e){
    this.triggerAction();
  }
});

EmberCloneMail.EmailView = Em.View.extend({
  tagName: "ul",
  classNames: ["email-list"],
  templateName: "email-view"
});

EmberCloneMail.emailListController.loadEmail();
EmberCloneMail.emailListView = EmberCloneMail.EmailListView.create({});
EmberCloneMail.emailListView.appendTo("#main");


