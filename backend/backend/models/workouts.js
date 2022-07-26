<<<<<<< HEAD
const mongoose= require('mongoose');

const schema = mongoose.Schema;

const workouts= new schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
    
},{timestamps:true});

=======
const mongoose= require('mongoose');

const schema = mongoose.Schema;

const workouts= new schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
    
},{timestamps:true});

>>>>>>> 87dcacf (updated front end)
module.exports=mongoose.model('workout',workouts);