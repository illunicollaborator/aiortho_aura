 import Footer from "../../components/Defult_components/Footer"
import Nav from "../../components/Defult_components/Nav"
import Text from "../doctor-login/components/Text"
import SignupForm from "./HospitalSignupForm"
 



function page() {
    return (
        <div className="w-[100vw] flex items-center justify-start flex-col pt-[72px]  " style={{ height: 'calc(100vh - 72px)' }} >
            {/* <Nav/> */}
            <div className=' w-full md:w-full lg:w-[40vw] mt-2  px-[4vw] lg:px-[0px]     '>
                <div className="flex ietms-start flex-col mb-[10vh] ">

                    <Text fonts={'Pretendard Variable'} fontWeight={900} TextSize='30px' TextChildrem='의사 로그인' color='#161621' Line_height='40px' paddingLeft='6px' />
                    <div className="mb-[25px] mt-[5px]">
                        <Text fonts={'Pretendard Variable'} fontWeight={400} TextSize='15px' TextChildrem='서비스 사용을 위해 로그인 해주세요.' color='#66798D' Line_height='22px' paddingLeft='6px' marginTops={'15px'} />
                    </div>
                <SignupForm /> 
                </div>
               
            </div>
 {/* <Footer/> */}
        </div>
    )
}

export default page
