/**
 * Created by zac on 2/25/17.
 */
Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.tasks.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.tasks.events({
    "submit .add-task": function (event) {
      var name = event.target.name.value;
    }
  });
}

if (Meteor.isServer) {

}

