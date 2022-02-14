function ChildComponent(props){
    const {name, age} = props;
    return (
    <div>
        <p>
           이름은 {name}입니다. 나이는 {age}이구요
        </p>
    </div> 
    );
} 

export default ChildComponent;
