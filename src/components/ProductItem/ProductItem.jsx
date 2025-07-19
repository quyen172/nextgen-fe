import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";
import { getProductImageUrl } from "../../utils/formatImage";

const ProductItem = ({ product }) => {
  const { ProductID, Name, base_price, Image } = product;

  return (
    <div className="tw-mb-4">
      <div className="tw-relative tw-pt-[100%]">
        <img
          src={getProductImageUrl(Image)}
          alt={Name}
          className="tw-w-full tw-h-full tw-object-cover tw-absolute tw-top-0 tw-left-0"
        />

        {/* Commented out discount tag
        {discount && (
          <p className="tw-px-3 tw-py-1 tw-bg-[#99CCD0] tw-text-white tw-absolute tw-top-4 tw-right-4 tw-text-xs tw-font-medium">
            -{discountPercent}%
          </p>
        )}
        */}
      </div>

      <div className="tw-mt-5 tw-flex tw-flex-col tw-items-center tw-gap-y-3">
        <Link
          to={`/products/${ProductID}`}
          className="tw-text-center tw-line-clamp-1 tw-font-semibold tw-text-[#212121]"
        >
          {Name}
        </Link>

        <p className="tw-m-0 tw-flex tw-items-center tw-gap-x-4">
          <span className="tw-text-[#99CCD0]">{formatPrice(base_price)}</span>
          {/* Commented out original price with strikethrough
          {discount && (
            <span className="tw-text-sm tw-line-through tw-text-[#E0E0E0]">
              {formatPrice(base_price)}
            </span>
          )}
          */}
        </p>

        <hr className="tw-bg-[#EEEEEE] tw-w-full tw-m-0" />

        <button className="tw-uppercase tw-bg-transparent tw-text-[#9E9E9E] tw-font-medium tw-outline-none tw-border-none tw-flex tw-items-center tw-gap-x-2 tw-cursor-pointer hover:tw-text-[#99CCD0]">
          Thêm vào giỏ hàng
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
