/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Size } from "./utils/enums";
import { CarouselItem } from "./utils/types";
export namespace Components {
    interface RbCarousel {
        /**
          * Size of the carousel images
         */
        "size": Size;
        /**
          * Time interval for slides automatic switching (in ms)
         */
        "slideIntervalTime": number;
    }
    interface RbCarouselItem {
        /**
          * Image alt tag
         */
        "imageAlt"?: string;
        /**
          * Direct URL to the image
         */
        "imageUrl": string;
    }
    interface RbCarouselV2 {
        /**
          * Items to display
         */
        "items": Array<CarouselItem>;
        /**
          * Size of the carousel images
         */
        "size": Size;
        /**
          * Time interval for slides automatic switching (in ms)
         */
        "slideIntervalTime": number;
    }
}
export interface RbCarouselItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRbCarouselItemElement;
}
declare global {
    interface HTMLRbCarouselElement extends Components.RbCarousel, HTMLStencilElement {
    }
    var HTMLRbCarouselElement: {
        prototype: HTMLRbCarouselElement;
        new (): HTMLRbCarouselElement;
    };
    interface HTMLRbCarouselItemElement extends Components.RbCarouselItem, HTMLStencilElement {
    }
    var HTMLRbCarouselItemElement: {
        prototype: HTMLRbCarouselItemElement;
        new (): HTMLRbCarouselItemElement;
    };
    interface HTMLRbCarouselV2Element extends Components.RbCarouselV2, HTMLStencilElement {
    }
    var HTMLRbCarouselV2Element: {
        prototype: HTMLRbCarouselV2Element;
        new (): HTMLRbCarouselV2Element;
    };
    interface HTMLElementTagNameMap {
        "rb-carousel": HTMLRbCarouselElement;
        "rb-carousel-item": HTMLRbCarouselItemElement;
        "rb-carousel-v2": HTMLRbCarouselV2Element;
    }
}
declare namespace LocalJSX {
    interface RbCarousel {
        /**
          * Size of the carousel images
         */
        "size"?: Size;
        /**
          * Time interval for slides automatic switching (in ms)
         */
        "slideIntervalTime"?: number;
    }
    interface RbCarouselItem {
        /**
          * Image alt tag
         */
        "imageAlt"?: string;
        /**
          * Direct URL to the image
         */
        "imageUrl"?: string;
        "onCarouselItemClicked"?: (event: RbCarouselItemCustomEvent<boolean>) => void;
    }
    interface RbCarouselV2 {
        /**
          * Items to display
         */
        "items"?: Array<CarouselItem>;
        /**
          * Size of the carousel images
         */
        "size"?: Size;
        /**
          * Time interval for slides automatic switching (in ms)
         */
        "slideIntervalTime"?: number;
    }
    interface IntrinsicElements {
        "rb-carousel": RbCarousel;
        "rb-carousel-item": RbCarouselItem;
        "rb-carousel-v2": RbCarouselV2;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rb-carousel": LocalJSX.RbCarousel & JSXBase.HTMLAttributes<HTMLRbCarouselElement>;
            "rb-carousel-item": LocalJSX.RbCarouselItem & JSXBase.HTMLAttributes<HTMLRbCarouselItemElement>;
            "rb-carousel-v2": LocalJSX.RbCarouselV2 & JSXBase.HTMLAttributes<HTMLRbCarouselV2Element>;
        }
    }
}