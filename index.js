function carPooling(trips, capacity)
{
    let totalPassengers = 0     //Count the number of passengers in the car at any point in time
    // Follow the constraints
    if(trips.length < 1 || trips.length > 1000){
        console.log("Violated the array length constraint")
        return false
    }
    if(capacity < 1 || capacity > 10**5){
        console.log("Violated the capacity constraint")
        return false
    }
    for(let i = 0;i < trips.length;i++){
        if(trips[i].length !== 3){
            console.log("Violated the array element's length constraint")
            return false
        }
        for(let j = 0;j < trips[i].length;j++){     //Looping through the elements of the inner array to check for the constraints
            if(trips[i][0] < 1 || trips[i][0] > 100){
                console.log("Violated the Number_Of_Passengers constraint")
                return false
            }
            else if(trips[i][1] < 0 || trips[i][1] > trips[i][2] || trips[i][2] > 1000){
                console.log("Violated the From_And_To constraint")
                return false
            }
        }
        totalPassengers += trips[i][0]      //Add the the number of passengers at each location
    }
    if(totalPassengers <= capacity){    //If the total number of passengers is less than or equal to the capacity, then we can complete all trips successfully
        console.log("Can complete all trips SUCCESSFULLY")
        return true
    }
    console.log("Cannot complete all trips")
    return false;
}

export{carPooling}