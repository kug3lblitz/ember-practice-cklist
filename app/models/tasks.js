import DS from 'ember-data';

export default DS.Model.extend({
    job: DS.attr("string"),
    completed: DS.attr("boolean")
}).reopenClass({
    Fixtures: [
    {
        id:1,
        job:"task 01",
        completed: true
    },
    {
        id:2,
        job:"task 02",
        completed: false
    },
    {
        id:3,
        job:"task 03",
        completed: false
    },
    {
        id:4,
        job:"task 04",
        completed: false
    },
    {
        id:5,
        job:"task 05",
        completed: false
    },
    {
        id:6,
        job:"task 06",
        completed: false
    },
    {
        id:7,
        job:"task 07",
        completed: false
    }
    ]
});
