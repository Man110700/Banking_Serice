import Banner from "../../component/banner/banner";
import Navbar_Page from "../../component/navbar/navbar-page/navbar-page";
import Navbar_Service from "../../component/navbar/navbar-service/service-support";
import adv_1 from "../../assets/banner/advertisement_1.png";
import adv_2 from "../../assets/banner/advertisement_2.png";
import event from "../../assets/banner/event.png";
import Footer from "../../component/footer/footer";
import Commit_Content from "../../component/commit_content/commit_content";
import RegisterCompanyForm from "../../component/register/register";
import Text_Ad from "../../component/text_advertisement/text_ad";

export default function Home() {
  return (
    <>
      <Navbar_Page />
      <Navbar_Service />
      <Banner source={adv_1} name="Advertisement-1" />
      <Banner source={adv_2} name="Advertisement-2" />
      <Text_Ad />
      <RegisterCompanyForm />
      <Commit_Content />
      <Banner source={event} name="event" />
      <Footer />
    </>
  );
}
