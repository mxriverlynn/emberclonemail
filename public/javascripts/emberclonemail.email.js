EmberCloneMail.Email = Ember.Object.extend({});

EmberCloneMail.emailController = Ember.Object.create({
  showEmail: function(email){
    this.set("content", email);
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

EmberCloneMail.emailListController.loadEmail();

EmberCloneMail.EmailListView = Em.View.extend({
  classNames: ["email-list", "email-view"],
  templateName: "email-list-view"
});

EmberCloneMail.EmailPreview = Em.View.extend({
  templateName: "email-preview",

  click: function(e){
    e.preventDefault();
    var email = this.get("content");
    EmberCloneMail.emailController.showEmail(email);
  }
});

