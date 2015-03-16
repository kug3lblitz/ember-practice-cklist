import Ember from 'ember';

export default Ember.ObjectController.extend({
    isCompleted: function(key, value){
        var model = this.get('model');
        if (value === undefined) {
            return model.get('completed');
        } else {
            model.set('completed', value);
            model.save();
            return value;
        }
    }.property('model.completed'),

       actions: {
           removeTask: function () {
            var model = this.get('model');
            model.deleteRecord();
            model.save();
           }
       }
});
