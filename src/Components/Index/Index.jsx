import React, { Fragment } from "react";
import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import GiftBooks from "../giftBooks/giftBooks";
import BookWished from "../BooksWished/BooksWished";

function HomePage() {
    return (
        <Fragment>
            <Slider />
            <Services />
            <GiftBooks />
            <BookWished />
        </Fragment>
    )
}

export default HomePage;