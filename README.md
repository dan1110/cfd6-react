=====
useRef - level1: nó có 1 giá trị là curent
======
export default React.forwardRef(funciton Home(props, ref){
let inputRef = useRef(null);
function onSubmit() {
onSubmit: console.log(inputRef);
onSubmit: inputRef.current.value = 'aaaa';
}
return(
<input
        type="text"
        name="name"
        placeholder="Họ và tên bạn"
        ref={inputRef}
    />
)
})

=====================================

=======
useRef - level2: truyền ref component này sang component khác
=======

//cha
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

    let inputRef = useRef();

    return (
    	<BrowserRouter>
    		<Header />
    		<Switch>
    			<Route exact path="/"><Home ref={inputRef} /> </Route>
    		</Switch>
    		<Footer />
    	</BrowserRouter>
    );

}

export default App;

//con
export default React.forwardRef(funciton Home(props, ref){
let inputRef = useRef(null);
function onSubmit() {
onSubmit: console.log(inputRef);
onSubmit: inputRef.current.value = 'aaaa';
}
return(
<input
        type="text"
        name="name"
        placeholder="Họ và tên bạn"
        ref={inputRef}
    />
)
})
=> TRong trường hợp tahwfng component cha muốn tác dộng lên component con

===========================

=====
return ReactDom.creataPortal({
<></>
, document.body})

## ==============================

    			{/* Dynamic router (URL param) */}
                {/* <Route path="/khoa-hoc/:slug" component={CourseDetail} /> */}


==================
# locallhost:3000/khoahoc/a?a=1&b=2
window.location.search
=> ?a=1&b=2 
# convert url to obj
const urlParams = new URLSearchParams(window.location.search);
urlParams.get("a") => a = 1
urlParams.get("b") => a = 2