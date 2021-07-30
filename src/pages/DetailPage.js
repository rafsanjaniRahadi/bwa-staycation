import React, { Component } from 'react';

import { connect } from 'react-redux';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimonial from 'parts/Testimony';
import Footer from 'parts/Footer';

import ItemDetails from "json/itemDetails.json";

import { checkoutBooking } from 'store/action/checkout';

class DetailPage extends Component {
    
    componentDidMount(){
        window.title = "Details Page"
        window.scrollTo(0,0);
    }
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: ""},
            { pageTitle: "House Detail", pageHref: ""}
        ];
        return (
            <>
            <Header {...this.props}></Header>
            <PageDetailTitle
                breadcrumb={breadcrumb}
                data={ItemDetails}
            >
            </PageDetailTitle>
            <FeaturedImage  data={ItemDetails.imageUrls} />
            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">
                        <PageDetailDescription data={ItemDetails}></PageDetailDescription>
                    </div>
                    <div className="col-5">
                        <BookingForm
                        itemDetails={ItemDetails}
                        startBooking={this.props.checkoutBooking} />
                    </div>
                </div>
            </section>
            <Categories data={ItemDetails.categories}></Categories>
            <Testimonial data={ItemDetails.testimonial}></Testimonial>
            <Footer></Footer>
            </>
        )
    }
}

export default  connect(null, { checkoutBooking })(DetailPage);