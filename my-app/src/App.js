import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";
import TopNav from "./components/TopNav.js";
import BookingPhotos from "./components/BookingPhotos.js";
import Booking from "./components/Booking.js";
import Gallery from "./components/Gallery.js";
import Message from "./components/Message.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <TopNav />
      <Navbar />
      <Main />
      <BookingPhotos />
      <Booking />
      <Gallery />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
