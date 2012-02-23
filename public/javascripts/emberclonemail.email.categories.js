EmberCloneMail.EmailCategory = Ember.Object.extend({});

EmberCloneMail.EmailCategoryController = Ember.ArrayController.create({
  content: [],

  loadCategories: function(){
    var that = this;
    $.ajax({
      url: "/categories",
      dataType: "json",
      success: function(categoryData){
        var categories = categoryData.map(function(cat){
          return EmberCloneMail.EmailCategory.create(cat);
        });
        that.set("content", categories);
      }
    });
  }
});

EmberCloneMail.EmailCategoryController.loadCategories();

EmberCloneMail.EmailCategoriesListView = Ember.View.extend({
  templateName: "email-category-list"
});

EmberCloneMail.EmailCategoryView = Ember.View.extend({
  templateName: "email-category"
});
