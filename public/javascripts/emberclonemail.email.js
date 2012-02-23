EmberCloneMail.Email = Ember.Object.extend({});

EmberCloneMail.emailController = Ember.ArrayController.create({
  content: [],

  selectedEmail: null,

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
  },

  showInbox: function(){
    EmberCloneMail.emailController.loadEmail();
    EmberCloneMail.emailStates.goToState("showInbox");
  },
  
  showEmail: function(view){
    var email = view.get("content");
    this.set("selectedEmail", email);
    EmberCloneMail.emailStates.goToState("showEmail");
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

EmberCloneMail.emailStates = Ember.StateManager.create({
  rootElement: "#main",

  showInbox: Ember.ViewState.create({
    view: EmberCloneMail.EmailListView.create()
  }),

  showEmail: Ember.ViewState.create({
    view: EmberCloneMail.EmailView.create()
  })

});

EmberCloneMail.emailController.showInbox();
