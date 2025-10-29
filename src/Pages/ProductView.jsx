import React from 'react'
import { Link } from 'react-router-dom'
import { featured_Products } from '../assets/data';
import { FaShoppingBag, FaStar } from 'react-icons/fa';
import RangeSlider from '../Components/RangeSlider';
import ItemsSlider from '../Components/ItemsSlider';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const ProductView = () => {
    const displayedItems = featured_Products.slice(8, 24);
    

    return (
        <section className='container_box '>
            <div className='product_view_container'>
                <div className='flex p-3 mt-10 public_sans prodct_vew_main justify-between'>
                    <div className='p-4 w-[22%] bg-white  flex flex-col border-1 border-[#ffffff] gap-4 justify-start all_categories '>

                        <div className='flex flex-col justify-start items-start left_view_cntainer gap-7 shadow-md p-3'>
                            <div className='border-1 w-full rounded-md p-2 flex-col flex gap-4'>
                                <h4 className='text-[#020A13] text-[#020A13] text-[17px] 2xl:text-[22px] xl:text[18px] font-bold md:text-[17px] lg:text-[16px] font-extrabold '>Diabetes</h4>
                                <ul className='2xl:text-[15px] xl:text[13px] text-[13px] md:text-[14px] category_list_2 font-medium flex flex-col gap-4  '>
                                    <li><Link>Top Picks - Diabetes Care</Link></li>
                                    <li><Link>Diabetes Nutrition Offers</Link></li>
                                    <li><Link>Blood Glucose Monitors</Link></li>
                                    <li><Link>Test Strips & Lancets</Link></li>
                                    <li><Link>Sugar Free</Link></li>
                                    <li><Link>Ayurvedic Diabetes Remedies</Link></li>
                                    <li><Link>Diabetic Medicines</Link></li>
                                    <li><Link>Sugar Substitutes</Link></li>
                                    <li><Link>Diabetic Diet</Link></li>
                                    <li><Link>Diabetic Footwear</Link></li>
                                    <li><Link>Sugar Free Offers</Link></li>
                                    <li><Link>Test Strips Offers</Link></li>
                                    <li><Link>Sugarfree Chyawanparash</Link></li>
                                    <li><Link>Top Deals - Ayurvedic Medicines</Link></li>
                                    <li><Link>Diabetes Health</Link></li>
                                    <li><Link>Protinex</Link></li>
                                    <li><Link>Dabur</Link></li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-5 border-1 w-full rounded-md p-2 '>
                                <h3 className='text-[#020A13] text-[17px] 2xl:text-[24px] xl:text[22px] font-bold md:text-[20px] lg:text-[16px] font-extrabold'>
                                    Filters
                                </h3>
                                <div className=''>
                                    <h3 className='text-[#020A13] text-[17px] 2xl:text-[22px] xl:text[18px] font-bold md:text-[17px] lg:text-[16px] font-extrabold'>
                                        Category
                                    </h3>
                                    <ul className='2xl:text-[16px] xl:text[14px] text-[#191C1F] text-[15px] 2xl:font-bold lg:font-bold font-medium md:text-[13px] category_list_2 flex flex-col gap-3 scroll overflow-y-scroll h-[300px]'>
                                        <li><Link>Winter Care Essentials</Link></li>
                                        <li><Link>Vitamins & Nutrition</Link></li>
                                        <li><Link>Nutritional Drinks</Link></li>
                                        <li><Link>Pet Care</Link></li>
                                        <li><Link>Sexual Wellness</Link></li>
                                        <li><Link>Stomach Care</Link></li>
                                        <li><Link>Fitness Supplements</Link></li>
                                        <li><Link>Pain Relief</Link></li>
                                        <li><Link>Herbal Juice</Link></li>
                                        <li><Link>Healthy Snacks</Link></li>
                                        <li><Link>Feminine Care</Link></li>
                                        <li><Link>Immunity Boosters</Link></li>
                                        <li><Link>Covid Essentials</Link></li>
                                        <li><Link>Personal Care Products</Link></li>
                                        <li><Link>Supports & Braces</Link></li>
                                        <li><Link>Hair & Skin Care </Link></li>
                                        <li><Link>Ayurveda Products</Link></li>
                                        <li><Link>Elderly Care</Link></li>
                                        <li><Link>Rehydration Beverages</Link></li>
                                        <li><Link>First Aid</Link></li>
                                        <li><Link>Cold, Cough & Fever</Link></li>
                                        <li><Link>Baby Care</Link></li>
                                        <li><Link>Anti-Pollution</Link></li>
                                        <li><Link>Skin Infection</Link></li>
                                    </ul>
                                </div>
                                <hr />
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-[#020A13] text-[#020A13] text-[17px] 2xl:text-[22px] xl:text[18px] font-bold md:text-[17px] lg:text-[16px] font-extrabold'>
                                        Brand
                                    </h3>
                                    <hr />
                                    <div className='flex flex-col gap-4'>
                                        <ul className='flex flex-col gap-2'>
                                            <li className='flex gap-2 cursor-pointer'>
                                                <input type='checkbox' />Dabur
                                            </li>
                                            <li className='flex gap-2 cursor-pointer'>
                                                <input type='checkbox' />Organic India
                                            </li>
                                            <li className='flex gap-2 cursor-pointer'>
                                                <input type='checkbox' />Himalaya
                                            </li>
                                            <li className='flex gap-2 cursor-pointer'>
                                                <input type='checkbox' />M Caffeine
                                            </li>
                                        </ul>
                                        <hr />
                                        <div className='group w-[100px] h-[30px]'>
                                            <button className='text-[16px] cursor-pointer rounded-md group-hover:bg-indigo-100 2xl:text-[18px] w-full h-full group-hover:transition'>
                                                +1 More
                                            </button>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <h3 className='text-[#020A13] text-[#020A13] text-[17px] 2xl:text-[22px] xl:text[18px] font-bold md:text-[17px] lg:text-[16px] font-extrabold'>
                                                Price
                                            </h3>
                                            <hr/>
                                            <RangeSlider />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[75%] right_product_view nnt text-[#020A13]'>
                        <h2 className='text-[24px] 2xl:text-[32px] xl:text-[28px] md:text-[25px] font-semibold'>All Products</h2>
                        <div className='grid grid-cols-4 gap-2 all_products_view'>

                            {displayedItems.map((item, index) => {
                                return (
                                    <SwiperSlide className=' h-full mt-10' ><ItemsSlider key={index} id={item.id} image={item.image} name={item.name} deliver_time={item.deliver_time} time={item.time} star_content={item.star_content} old_price={item.old_price} new_price={item.new_price} discount={item.discount} /></SwiperSlide>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductView