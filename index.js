/* Your Code Here */function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}    
//          createEmployeeRecords
function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function createTimeOutEvent(dateStamp){
 
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

//          hoursWorkedOnDate
function hoursWorkedOnDate(date){

    let timeIn = this.timeInEvents.find(function(e){
        return e.date === date
    })

    let timeOut = this.timeOutEvents.find(function(e){
        return e.date === date
    })

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date){
    let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseFloat(wage.toString())
}

//Dependent functions: findEmployeeByFirstName(collection, firstNameString)
function findEmployeeByFirstName(srcArray, firstName){
    //finds "Loki"
    return srcArray.find(function(record){
        return record.firstName === firstName
    }
    )
}


//          findEmployeeByFirstName
function calculatePayroll(arrayOfEmployeeRecords){
    // correctly sums the payroll burden to $11,880 when passed an array of employee records

    return arrayOfEmployeeRecords.reduce(function(memo, rec){ 
        return memo + allWagesFor.call(rec)
    }
    , 0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

