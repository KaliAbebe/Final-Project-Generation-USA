const assert = require('assert');
const TaskManager = require('../lib/taskManager.js')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
describe('TaskManager',() => {

    const test = new TaskManager()
    
    describe('.addTask', () => {
        it('should add a task to a taskList object',() => {
            //Setup - create objects, variables, and set conditions that your test depends on
            const a = {
                id: 0, name: "make a test", description: "description", assignedTo: "someone", dueDate: "01/02/0304", status: "TODO"
            }
            const b = {
                id: 1, name: "make a test", description: "second description", assignedTo: "someone else", dueDate: "05/06/0708", status: "DONE"
            }
            const expected = [a,b]
            //Exercise - execute the functionality you are testing
            test.addTask("make a test","description","someone","01/02/0304")
            test.addTask("make a test","second description","someone else","05/06/0708","DONE")
            //Verify - check your expectations against the result of the exercise phase. You can use the assert library here
            assert.deepEqual(test.tasks,expected)
        })
    })
    describe('.deleteTask',() => {
        it('should remove a task from a taskList object',() => {
            //setup
            const expected = [{
                id: 1, name: "make a test", description: "second description", assignedTo: "someone else", dueDate: "05/06/0708", status: "DONE"
            }]
            //exercise
            test.deleteTask(0)
            //verify
            assert.deepEqual(test.tasks,expected)
        })
    })
    describe('.getTaskById',() => {
        it('should get a task object from the tasks arroay of a taskList object', () => {
            //setup
            /*note that that in the TaskManager class, the addtask function isn't responsible for resetting the order of ids, so after the following addtask calls, the new test.tasks order of ids is 1,1,2 rather than 0,1,2*/
            test.addTask("make a test","description","someone","01/02/0304")
            test.addTask("make a third test","third description","someone","09/10/1112")
            const expected = {id:2,name:"make a third test",description:"third description",assignedTo:"someone",dueDate:"09/10/1112",status:"TODO"}
            //exercise
            
            const result = test.getTaskById(2)
            //verify
            assert.deepEqual(expected,result)
        })
    })
//    describe('.render',() => {
//        it('should render a taskmanagers tasks as a task list in html' () => {
//            //setup
//            //exercise
//            //verify
//        })
//    })
//    describe('.save',() => {
//        it('should save a tasklist to the local storage',() => {
//            //setup
//            //exercise
//            //verify
//        })
//    })
//    describe('.load',() => {
//        it('should get the tasklist in local storage and add it to the tasklist',() => {
//            //setup
//            //exercise
//            //verify
//        })
//    })
})