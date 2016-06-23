/**
 * Created by user on 6/23/2016.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table border="2" class="table table-bordered" ><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+
            employeesList[i].lastName+'</td><td>'+
            employeesList[i].phone+'</td><td>'+
            employeesList[i].salary+'</td></tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function(firstName, lastName, phone, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone= document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));

    /**
     * Ex1: refereh - odata adaugat se va face si un showlist - deci refresh
     */
    showList();
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("salary").value = "";

}


/**
 * Ex.3 = am luat o variabila in care am setat suma totala pe 0 dupa care am mers cu un for prin salariul
 * fiecarui element si am adaugat-o la suma totala
 */
function sumTotal(){
    var salaryTotal = 0;
    for (var i in employeesList) {
        salaryTotal += employeesList[i].salary;
    }
    document.getElementById("salaryT").value = salaryTotal;
}

function deleteLastEmployee() {
    employeesList.splice(employeesList.length - 1, 1);
    showList()
}
