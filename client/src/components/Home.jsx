import React, { useState, useEffect, useRef } from "react";
import { apiService } from "../service/api";
import { FaChevronDown, FaBars, FaUser, FaShoppingCart } from "react-icons/fa";
import mainLogo from "../assets/tech-gear-w.png";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import Navigate from "./Navigate";
import { OverlayHome, OverlayBrands } from "./Overlay";
import HotProduct from "./Product/HotProduct";
import ServiceProvide from "./Advertise/ServiceProvide";
import BannerGPU from "./Advertise/BannerGPU";
import GPU from "../assets/RTX3080.png";
import Monitor from "../assets/Monitor/Rog Monitor.png";
import Mouse from "../assets/Mouse/Rog Mouse.png";
import Keyboard from "../assets/Keyboard/Keyboard Razer.png";
import CustomPCPromo from "./CustomePC";
import ProductCarousel from "./Product/ProductCarousel";
import { useAuth } from "./context/AuthContext";
import { useCart } from "./cart/CartContext";

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Service', path: '/service' },
  { title: 'Promotion', path: '/promotion' },
  { title: 'About Us', path: '/about-us' },
];

export default function Home() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const searchInputRef = useRef();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems: itemCount } = useCart();
  const [newInProducts, setNewInProducts] = useState([]);
  const [lowEndPCs, setLowEndPCs] = useState([]);
  const [rogLaptops, setRogLaptops] = useState([]);
  const [loadingNewIn, setLoadingNewIn] = useState(true);
  const [errorNewIn, setErrorNewIn] = useState(null);
  const [loadingLowEnd, setLoadingLowEnd] = useState(true);
  const [errorLowEnd, setErrorLowEnd] = useState(null);
  const [loadingRog, setLoadingRog] = useState(true);
  const [errorRog, setErrorRog] = useState(null);

  useEffect(() => {
    const fetchNewInProducts = async () => {
      try {
        setLoadingNewIn(true);
        const response = await apiService.getProducts({ limit: 12, sort: "desc", order_column: "product_code" });
        setNewInProducts(response.data || []);
      } catch (err) {
        setErrorNewIn("Failed to load new in products.");
      } finally {
        setLoadingNewIn(false);
      }
    };
    fetchNewInProducts();
  }, []);

  useEffect(() => {
    const fetchLowEndPCs = async () => {
      try {
        setLoadingLowEnd(true);
        const response = await apiService.getProducts({ limit: 12, type_product: "VGA", sort: "asc", order_column: "price" });
        setLowEndPCs(response.data || []);
      } catch (err) {
        setErrorLowEnd("Failed to load budget-friendly PCs.");
      } finally {
        setLoadingLowEnd(false);
      }
    };
    fetchLowEndPCs();
  }, []);

  useEffect(() => {
    const fetchRogLaptops = async () => {
      try {
        setLoadingRog(true);
        const response = await apiService.getProducts({ limit: 12, brand: "ASUS", sort: "asc", type_product: "Labtop" });
        setRogLaptops(response.data || []);
      } catch (err) {
        setErrorRog("Failed to load ROG series laptops.");
      } finally {
        setLoadingRog(false);
      }
    };
    fetchRogLaptops();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value;
  };

  return (
    <>
      <nav className="md:hidden w-full bg-[#FFA726] shadow-sm flex flex-col px-4 py-3 fixed top-0 left-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded-full transition"
              style={{ background: "none" }}
              onClick={() => {
                setShowNav((v) => !v);
                setShowAuth(false);
              }}
              aria-label="Open navigation"
            >
              <FaBars size={22} className="text-[#232F3E]" />
            </button>
            <img
              src={mainLogo}
              alt="GearTech Logo"
              className="h-12 w-auto object-contain"
              style={{ maxWidth: 160 }}
            />
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-2">
                <button
                  className="p-2 rounded-full transition"
                  style={{ background: "none" }}
                  aria-label="User Profile"
                  onClick={() => navigate(`/user/profile/${user.id}`)}
                >
                  <FaUser className="text-[#232F3E]" size={20} />
                </button>
              </div>
            ) : (
              <button
                className="p-2 rounded-full transition"
                style={{ background: "none" }}
                onClick={() => {
                  setShowAuth((v) => !v);
                  setShowNav(false);
                }}
                aria-label="Login/Register"
              >
                <FaUser className="text-[#232F3E]" size={20} />
              </button>
            )}
            <div className="relative">
              <button
                className="p-2 rounded-full transition"
                style={{ background: "none" }}
                onClick={() => navigate('/cart')}
                aria-label="My Cart"
              >
                <FaShoppingCart className="text-[#232F3E]" size={22} />
              </button>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FFA726] text-white text-xs rounded-full px-2 font-bold shadow">
                  {itemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
      {showNav && (
        <div className="md:hidden fixed top-[56px] left-0 w-full bg-white shadow-lg z-30 animate-slideDown">
          <ul className="flex flex-col py-4 px-6 gap-3 font-bold text-lg text-[#232F3E]">
            {navLinks.map(link => (
              <li key={link.title}>
                <button
                  className="w-full text-left py-2 px-2 rounded hover:bg-[#FFA726]/20 transition"
                  onClick={() => {
                    navigate(link.path);
                    setShowNav(false);
                  }}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showAuth && (
        <div className="md:hidden fixed top-[56px] left-0 w-full bg-white shadow-lg z-30 flex flex-col items-center py-4 animate-slideDown">
          <button
            className="w-10/12 mb-2 text-base px-4 py-2 rounded-full border border-[#FFA726] text-[#FFA726] bg-white hover:bg-[#FFA726] hover:text-white transition"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="w-10/12 text-base px-4 py-2 rounded-full border border-[#FFA726] text-[#FFA726] bg-white hover:bg-[#FFA726] hover:text-white transition"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      )}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-x-10 mt-6">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div
              className="bg-gray-100 p-3 rounded-md flex justify-between items-center cursor-pointer md:hidden"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <h3 className="font-bold text-lg">Categories</h3>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`}
              />
            </div>
            <div className={`mt-2 ${isCategoriesOpen ? 'block' : 'hidden'} md:block`}>
              <Categories />
            </div>
          </div>
          <div className="w-full md:w-3/4 flex flex-col gap-y-5">
            <div className="w-full hidden md:block">
              <Navigate />
            </div>
            <OverlayHome />
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <h2 className="text-xl md:text-2xl font-bold my-5">All Brands</h2>
          <OverlayBrands />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-5 justify-between">
          <HotProduct brand_model={"NVIDIA GeForce RTX"} type_product={"Graphic Card"} slogan={"Hurry Up, Limited time offer!"} image={GPU}/>
          <HotProduct brand_model={"ROG 4K OLED"} type_product={"Monitor"} slogan={"Hurry Up, Limited time offer!"} image={Monitor}/>
          <HotProduct brand_model={"Razer Wireless"} type_product={"Mouse"} slogan={"Hurry Up, Limited time offer!"} image={Mouse}/>
          <HotProduct brand_model={"Razer Wireless"} type_product={"Keyboard"} slogan={"Hurry Up, Limited time offer!"} image={Keyboard}/>
        </div>
        <div>
          <CustomPCPromo />
        </div>
        <ProductCarousel
          title="New In"
          products={newInProducts}
          isLoading={loadingNewIn}
          error={errorNewIn}
        />
        <ProductCarousel
          title="Budget-Friendly Gaming PCs"
          products={lowEndPCs}
          isLoading={loadingLowEnd}
          error={errorLowEnd}
        />
        <div className="mt-8">
          <BannerGPU />
        </div>
        <ProductCarousel
          title="ROG Series Laptops"
          products={rogLaptops}
          isLoading={loadingRog}
          error={errorRog}
        />
      </div>
      <div className="mt-10">
        <ServiceProvide />
      </div>
    </>
  );
}

// Add this to your CSS for slideDown animation if you want smooth effect:
// @keyframes slideDown { from { opacity: 0; transform: translateY(-16px);} to { opacity: 1; transform: translateY(0);} }
// .animate-slideDown { animation: slideDown 0.2s ease; }