const ListComponent= () =>{
    let nums =[1,2,3,4,5];
    let sqNums = nums.map(val => {
        return <li>{val*val}</li>
    });

    let persons= [
        {id:101, name:"amit",age:22},
        {id:131, name:"ajit",age:24},
        {id:121, name:"amar",age:25},
    ];
    let ptable = persons.map(per => {
        return <tr><td>{per.id}</td><td>{per.name}</td><td>{per.age}</td></tr>;
    })

    return(
        <li>
            Square array : {ptable}
        </li>
    );
}
export default ListComponent;