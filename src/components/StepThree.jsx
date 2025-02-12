import React, { useContext } from "react";
import "../components/step3.css";
import Bar_code from "../assets/Bar_code.png";
import { AppContext } from "../context/AppContext";

const StepThree = () => {
  const { step, setStep, formData, setFormData } = useContext(AppContext);
  const handleAnotherTicket = () => {
    setStep(1);
  };
  return (
    <div className="inner_card3">
      <section className="center_div">
        <div className="last_step">
          <h1>Your Ticket is Booked!</h1>
          <p>Check your email for a copy or you can download</p>
        </div>

        <svg
          width="300"
          height="600"
          viewBox="0 0 300 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4013_715)">
            <mask id="path-1-inside-1_4013_715" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M300 24.2433C300 21.7558 297.488 20 295 20V20C286.716 20 280 13.2843 280 5V5C280 2.51247 278.244 0 275.757 0H24.2433C21.7558 0 20 2.51246 20 5V5C20 13.2843 13.2843 20 5 20V20C2.51246 20 0 21.7558 0 24.2433V468.757C0 471.244 2.51247 473 5 473V473C13.2843 473 20 479.716 20 488C20 496.284 13.2843 503 5 503V503C2.51247 503 0 504.756 0 507.243V575.757C0 578.244 2.51245 580 5 580V580C13.2843 580 20 586.716 20 595V595C20 597.488 21.7558 600 24.2433 600H275.757C278.244 600 280 597.488 280 595V595C280 586.716 286.716 580 295 580V580C297.488 580 300 578.244 300 575.757V507.243C300 504.756 297.488 503 295 503V503C286.716 503 280 496.284 280 488C280 479.716 286.716 473 295 473V473C297.488 473 300 471.244 300 468.757V24.2433ZM280 487C280 487.552 279.552 488 279 488H273C272.448 488 272 487.552 272 487C272 486.448 272.448 486 273 486H279C279.552 486 280 486.448 280 487ZM267 488C267.552 488 268 487.552 268 487C268 486.448 267.552 486 267 486H261C260.448 486 260 486.448 260 487C260 487.552 260.448 488 261 488H267ZM256 487C256 487.552 255.552 488 255 488H249C248.448 488 248 487.552 248 487C248 486.448 248.448 486 249 486H255C255.552 486 256 486.448 256 487ZM243 488C243.552 488 244 487.552 244 487C244 486.448 243.552 486 243 486H237C236.448 486 236 486.448 236 487C236 487.552 236.448 488 237 488H243ZM232 487C232 487.552 231.552 488 231 488H225C224.448 488 224 487.552 224 487C224 486.448 224.448 486 225 486H231C231.552 486 232 486.448 232 487ZM219 488C219.552 488 220 487.552 220 487C220 486.448 219.552 486 219 486H213C212.448 486 212 486.448 212 487C212 487.552 212.448 488 213 488H219ZM208 487C208 487.552 207.552 488 207 488H201C200.448 488 200 487.552 200 487C200 486.448 200.448 486 201 486H207C207.552 486 208 486.448 208 487ZM195 488C195.552 488 196 487.552 196 487C196 486.448 195.552 486 195 486H189C188.448 486 188 486.448 188 487C188 487.552 188.448 488 189 488H195ZM184 487C184 487.552 183.552 488 183 488H177C176.448 488 176 487.552 176 487C176 486.448 176.448 486 177 486H183C183.552 486 184 486.448 184 487ZM171 488C171.552 488 172 487.552 172 487C172 486.448 171.552 486 171 486H165C164.448 486 164 486.448 164 487C164 487.552 164.448 488 165 488H171ZM160 487C160 487.552 159.552 488 159 488H153C152.448 488 152 487.552 152 487C152 486.448 152.448 486 153 486H159C159.552 486 160 486.448 160 487ZM147 488C147.552 488 148 487.552 148 487C148 486.448 147.552 486 147 486H141C140.448 486 140 486.448 140 487C140 487.552 140.448 488 141 488H147ZM136 487C136 487.552 135.552 488 135 488H129C128.448 488 128 487.552 128 487C128 486.448 128.448 486 129 486H135C135.552 486 136 486.448 136 487ZM123 488C123.552 488 124 487.552 124 487C124 486.448 123.552 486 123 486H117C116.448 486 116 486.448 116 487C116 487.552 116.448 488 117 488H123ZM112 487C112 487.552 111.552 488 111 488H105C104.448 488 104 487.552 104 487C104 486.448 104.448 486 105 486H111C111.552 486 112 486.448 112 487ZM99 488C99.5523 488 100 487.552 100 487C100 486.448 99.5523 486 99 486H93C92.4477 486 92 486.448 92 487C92 487.552 92.4477 488 93 488H99ZM88 487C88 487.552 87.5523 488 87 488H81C80.4477 488 80 487.552 80 487C80 486.448 80.4477 486 81 486H87C87.5523 486 88 486.448 88 487ZM75 488C75.5523 488 76 487.552 76 487C76 486.448 75.5523 486 75 486H69C68.4477 486 68 486.448 68 487C68 487.552 68.4477 488 69 488H75ZM64 487C64 487.552 63.5523 488 63 488H57C56.4477 488 56 487.552 56 487C56 486.448 56.4477 486 57 486H63C63.5523 486 64 486.448 64 487ZM51 488C51.5523 488 52 487.552 52 487C52 486.448 51.5523 486 51 486H45C44.4477 486 44 486.448 44 487C44 487.552 44.4477 488 45 488H51ZM40 487C40 487.552 39.5523 488 39 488H33C32.4477 488 32 487.552 32 487C32 486.448 32.4477 486 33 486H39C39.5523 486 40 486.448 40 487ZM27 488C27.5523 488 28 487.552 28 487C28 486.448 27.5523 486 27 486H21C20.4477 486 20 486.448 20 487C20 487.552 20.4477 488 21 488H27Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M300 24.2433C300 21.7558 297.488 20 295 20V20C286.716 20 280 13.2843 280 5V5C280 2.51247 278.244 0 275.757 0H24.2433C21.7558 0 20 2.51246 20 5V5C20 13.2843 13.2843 20 5 20V20C2.51246 20 0 21.7558 0 24.2433V468.757C0 471.244 2.51247 473 5 473V473C13.2843 473 20 479.716 20 488C20 496.284 13.2843 503 5 503V503C2.51247 503 0 504.756 0 507.243V575.757C0 578.244 2.51245 580 5 580V580C13.2843 580 20 586.716 20 595V595C20 597.488 21.7558 600 24.2433 600H275.757C278.244 600 280 597.488 280 595V595C280 586.716 286.716 580 295 580V580C297.488 580 300 578.244 300 575.757V507.243C300 504.756 297.488 503 295 503V503C286.716 503 280 496.284 280 488C280 479.716 286.716 473 295 473V473C297.488 473 300 471.244 300 468.757V24.2433ZM280 487C280 487.552 279.552 488 279 488H273C272.448 488 272 487.552 272 487C272 486.448 272.448 486 273 486H279C279.552 486 280 486.448 280 487ZM267 488C267.552 488 268 487.552 268 487C268 486.448 267.552 486 267 486H261C260.448 486 260 486.448 260 487C260 487.552 260.448 488 261 488H267ZM256 487C256 487.552 255.552 488 255 488H249C248.448 488 248 487.552 248 487C248 486.448 248.448 486 249 486H255C255.552 486 256 486.448 256 487ZM243 488C243.552 488 244 487.552 244 487C244 486.448 243.552 486 243 486H237C236.448 486 236 486.448 236 487C236 487.552 236.448 488 237 488H243ZM232 487C232 487.552 231.552 488 231 488H225C224.448 488 224 487.552 224 487C224 486.448 224.448 486 225 486H231C231.552 486 232 486.448 232 487ZM219 488C219.552 488 220 487.552 220 487C220 486.448 219.552 486 219 486H213C212.448 486 212 486.448 212 487C212 487.552 212.448 488 213 488H219ZM208 487C208 487.552 207.552 488 207 488H201C200.448 488 200 487.552 200 487C200 486.448 200.448 486 201 486H207C207.552 486 208 486.448 208 487ZM195 488C195.552 488 196 487.552 196 487C196 486.448 195.552 486 195 486H189C188.448 486 188 486.448 188 487C188 487.552 188.448 488 189 488H195ZM184 487C184 487.552 183.552 488 183 488H177C176.448 488 176 487.552 176 487C176 486.448 176.448 486 177 486H183C183.552 486 184 486.448 184 487ZM171 488C171.552 488 172 487.552 172 487C172 486.448 171.552 486 171 486H165C164.448 486 164 486.448 164 487C164 487.552 164.448 488 165 488H171ZM160 487C160 487.552 159.552 488 159 488H153C152.448 488 152 487.552 152 487C152 486.448 152.448 486 153 486H159C159.552 486 160 486.448 160 487ZM147 488C147.552 488 148 487.552 148 487C148 486.448 147.552 486 147 486H141C140.448 486 140 486.448 140 487C140 487.552 140.448 488 141 488H147ZM136 487C136 487.552 135.552 488 135 488H129C128.448 488 128 487.552 128 487C128 486.448 128.448 486 129 486H135C135.552 486 136 486.448 136 487ZM123 488C123.552 488 124 487.552 124 487C124 486.448 123.552 486 123 486H117C116.448 486 116 486.448 116 487C116 487.552 116.448 488 117 488H123ZM112 487C112 487.552 111.552 488 111 488H105C104.448 488 104 487.552 104 487C104 486.448 104.448 486 105 486H111C111.552 486 112 486.448 112 487ZM99 488C99.5523 488 100 487.552 100 487C100 486.448 99.5523 486 99 486H93C92.4477 486 92 486.448 92 487C92 487.552 92.4477 488 93 488H99ZM88 487C88 487.552 87.5523 488 87 488H81C80.4477 488 80 487.552 80 487C80 486.448 80.4477 486 81 486H87C87.5523 486 88 486.448 88 487ZM75 488C75.5523 488 76 487.552 76 487C76 486.448 75.5523 486 75 486H69C68.4477 486 68 486.448 68 487C68 487.552 68.4477 488 69 488H75ZM64 487C64 487.552 63.5523 488 63 488H57C56.4477 488 56 487.552 56 487C56 486.448 56.4477 486 57 486H63C63.5523 486 64 486.448 64 487ZM51 488C51.5523 488 52 487.552 52 487C52 486.448 51.5523 486 51 486H45C44.4477 486 44 486.448 44 487C44 487.552 44.4477 488 45 488H51ZM40 487C40 487.552 39.5523 488 39 488H33C32.4477 488 32 487.552 32 487C32 486.448 32.4477 486 33 486H39C39.5523 486 40 486.448 40 487ZM27 488C27.5523 488 28 487.552 28 487C28 486.448 27.5523 486 27 486H21C20.4477 486 20 486.448 20 487C20 487.552 20.4477 488 21 488H27Z"
              fill="#072C31"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M300 24.2433C300 21.7558 297.488 20 295 20V20C286.716 20 280 13.2843 280 5V5C280 2.51247 278.244 0 275.757 0H24.2433C21.7558 0 20 2.51246 20 5V5C20 13.2843 13.2843 20 5 20V20C2.51246 20 0 21.7558 0 24.2433V468.757C0 471.244 2.51247 473 5 473V473C13.2843 473 20 479.716 20 488C20 496.284 13.2843 503 5 503V503C2.51247 503 0 504.756 0 507.243V575.757C0 578.244 2.51245 580 5 580V580C13.2843 580 20 586.716 20 595V595C20 597.488 21.7558 600 24.2433 600H275.757C278.244 600 280 597.488 280 595V595C280 586.716 286.716 580 295 580V580C297.488 580 300 578.244 300 575.757V507.243C300 504.756 297.488 503 295 503V503C286.716 503 280 496.284 280 488C280 479.716 286.716 473 295 473V473C297.488 473 300 471.244 300 468.757V24.2433ZM280 487C280 487.552 279.552 488 279 488H273C272.448 488 272 487.552 272 487C272 486.448 272.448 486 273 486H279C279.552 486 280 486.448 280 487ZM267 488C267.552 488 268 487.552 268 487C268 486.448 267.552 486 267 486H261C260.448 486 260 486.448 260 487C260 487.552 260.448 488 261 488H267ZM256 487C256 487.552 255.552 488 255 488H249C248.448 488 248 487.552 248 487C248 486.448 248.448 486 249 486H255C255.552 486 256 486.448 256 487ZM243 488C243.552 488 244 487.552 244 487C244 486.448 243.552 486 243 486H237C236.448 486 236 486.448 236 487C236 487.552 236.448 488 237 488H243ZM232 487C232 487.552 231.552 488 231 488H225C224.448 488 224 487.552 224 487C224 486.448 224.448 486 225 486H231C231.552 486 232 486.448 232 487ZM219 488C219.552 488 220 487.552 220 487C220 486.448 219.552 486 219 486H213C212.448 486 212 486.448 212 487C212 487.552 212.448 488 213 488H219ZM208 487C208 487.552 207.552 488 207 488H201C200.448 488 200 487.552 200 487C200 486.448 200.448 486 201 486H207C207.552 486 208 486.448 208 487ZM195 488C195.552 488 196 487.552 196 487C196 486.448 195.552 486 195 486H189C188.448 486 188 486.448 188 487C188 487.552 188.448 488 189 488H195ZM184 487C184 487.552 183.552 488 183 488H177C176.448 488 176 487.552 176 487C176 486.448 176.448 486 177 486H183C183.552 486 184 486.448 184 487ZM171 488C171.552 488 172 487.552 172 487C172 486.448 171.552 486 171 486H165C164.448 486 164 486.448 164 487C164 487.552 164.448 488 165 488H171ZM160 487C160 487.552 159.552 488 159 488H153C152.448 488 152 487.552 152 487C152 486.448 152.448 486 153 486H159C159.552 486 160 486.448 160 487ZM147 488C147.552 488 148 487.552 148 487C148 486.448 147.552 486 147 486H141C140.448 486 140 486.448 140 487C140 487.552 140.448 488 141 488H147ZM136 487C136 487.552 135.552 488 135 488H129C128.448 488 128 487.552 128 487C128 486.448 128.448 486 129 486H135C135.552 486 136 486.448 136 487ZM123 488C123.552 488 124 487.552 124 487C124 486.448 123.552 486 123 486H117C116.448 486 116 486.448 116 487C116 487.552 116.448 488 117 488H123ZM112 487C112 487.552 111.552 488 111 488H105C104.448 488 104 487.552 104 487C104 486.448 104.448 486 105 486H111C111.552 486 112 486.448 112 487ZM99 488C99.5523 488 100 487.552 100 487C100 486.448 99.5523 486 99 486H93C92.4477 486 92 486.448 92 487C92 487.552 92.4477 488 93 488H99ZM88 487C88 487.552 87.5523 488 87 488H81C80.4477 488 80 487.552 80 487C80 486.448 80.4477 486 81 486H87C87.5523 486 88 486.448 88 487ZM75 488C75.5523 488 76 487.552 76 487C76 486.448 75.5523 486 75 486H69C68.4477 486 68 486.448 68 487C68 487.552 68.4477 488 69 488H75ZM64 487C64 487.552 63.5523 488 63 488H57C56.4477 488 56 487.552 56 487C56 486.448 56.4477 486 57 486H63C63.5523 486 64 486.448 64 487ZM51 488C51.5523 488 52 487.552 52 487C52 486.448 51.5523 486 51 486H45C44.4477 486 44 486.448 44 487C44 487.552 44.4477 488 45 488H51ZM40 487C40 487.552 39.5523 488 39 488H33C32.4477 488 32 487.552 32 487C32 486.448 32.4477 486 33 486H39C39.5523 486 40 486.448 40 487ZM27 488C27.5523 488 28 487.552 28 487C28 486.448 27.5523 486 27 486H21C20.4477 486 20 486.448 20 487C20 487.552 20.4477 488 21 488H27Z"
              fill="url(#paint0_radial_4013_715)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M300 24.2433C300 21.7558 297.488 20 295 20V20C286.716 20 280 13.2843 280 5V5C280 2.51247 278.244 0 275.757 0H24.2433C21.7558 0 20 2.51246 20 5V5C20 13.2843 13.2843 20 5 20V20C2.51246 20 0 21.7558 0 24.2433V468.757C0 471.244 2.51247 473 5 473V473C13.2843 473 20 479.716 20 488C20 496.284 13.2843 503 5 503V503C2.51247 503 0 504.756 0 507.243V575.757C0 578.244 2.51245 580 5 580V580C13.2843 580 20 586.716 20 595V595C20 597.488 21.7558 600 24.2433 600H275.757C278.244 600 280 597.488 280 595V595C280 586.716 286.716 580 295 580V580C297.488 580 300 578.244 300 575.757V507.243C300 504.756 297.488 503 295 503V503C286.716 503 280 496.284 280 488C280 479.716 286.716 473 295 473V473C297.488 473 300 471.244 300 468.757V24.2433ZM280 487C280 487.552 279.552 488 279 488H273C272.448 488 272 487.552 272 487C272 486.448 272.448 486 273 486H279C279.552 486 280 486.448 280 487ZM267 488C267.552 488 268 487.552 268 487C268 486.448 267.552 486 267 486H261C260.448 486 260 486.448 260 487C260 487.552 260.448 488 261 488H267ZM256 487C256 487.552 255.552 488 255 488H249C248.448 488 248 487.552 248 487C248 486.448 248.448 486 249 486H255C255.552 486 256 486.448 256 487ZM243 488C243.552 488 244 487.552 244 487C244 486.448 243.552 486 243 486H237C236.448 486 236 486.448 236 487C236 487.552 236.448 488 237 488H243ZM232 487C232 487.552 231.552 488 231 488H225C224.448 488 224 487.552 224 487C224 486.448 224.448 486 225 486H231C231.552 486 232 486.448 232 487ZM219 488C219.552 488 220 487.552 220 487C220 486.448 219.552 486 219 486H213C212.448 486 212 486.448 212 487C212 487.552 212.448 488 213 488H219ZM208 487C208 487.552 207.552 488 207 488H201C200.448 488 200 487.552 200 487C200 486.448 200.448 486 201 486H207C207.552 486 208 486.448 208 487ZM195 488C195.552 488 196 487.552 196 487C196 486.448 195.552 486 195 486H189C188.448 486 188 486.448 188 487C188 487.552 188.448 488 189 488H195ZM184 487C184 487.552 183.552 488 183 488H177C176.448 488 176 487.552 176 487C176 486.448 176.448 486 177 486H183C183.552 486 184 486.448 184 487ZM171 488C171.552 488 172 487.552 172 487C172 486.448 171.552 486 171 486H165C164.448 486 164 486.448 164 487C164 487.552 164.448 488 165 488H171ZM160 487C160 487.552 159.552 488 159 488H153C152.448 488 152 487.552 152 487C152 486.448 152.448 486 153 486H159C159.552 486 160 486.448 160 487ZM147 488C147.552 488 148 487.552 148 487C148 486.448 147.552 486 147 486H141C140.448 486 140 486.448 140 487C140 487.552 140.448 488 141 488H147ZM136 487C136 487.552 135.552 488 135 488H129C128.448 488 128 487.552 128 487C128 486.448 128.448 486 129 486H135C135.552 486 136 486.448 136 487ZM123 488C123.552 488 124 487.552 124 487C124 486.448 123.552 486 123 486H117C116.448 486 116 486.448 116 487C116 487.552 116.448 488 117 488H123ZM112 487C112 487.552 111.552 488 111 488H105C104.448 488 104 487.552 104 487C104 486.448 104.448 486 105 486H111C111.552 486 112 486.448 112 487ZM99 488C99.5523 488 100 487.552 100 487C100 486.448 99.5523 486 99 486H93C92.4477 486 92 486.448 92 487C92 487.552 92.4477 488 93 488H99ZM88 487C88 487.552 87.5523 488 87 488H81C80.4477 488 80 487.552 80 487C80 486.448 80.4477 486 81 486H87C87.5523 486 88 486.448 88 487ZM75 488C75.5523 488 76 487.552 76 487C76 486.448 75.5523 486 75 486H69C68.4477 486 68 486.448 68 487C68 487.552 68.4477 488 69 488H75ZM64 487C64 487.552 63.5523 488 63 488H57C56.4477 488 56 487.552 56 487C56 486.448 56.4477 486 57 486H63C63.5523 486 64 486.448 64 487ZM51 488C51.5523 488 52 487.552 52 487C52 486.448 51.5523 486 51 486H45C44.4477 486 44 486.448 44 487C44 487.552 44.4477 488 45 488H51ZM40 487C40 487.552 39.5523 488 39 488H33C32.4477 488 32 487.552 32 487C32 486.448 32.4477 486 33 486H39C39.5523 486 40 486.448 40 487ZM27 488C27.5523 488 28 487.552 28 487C28 486.448 27.5523 486 27 486H21C20.4477 486 20 486.448 20 487C20 487.552 20.4477 488 21 488H27Z"
              fill="url(#paint1_radial_4013_715)"
            />
            <path
              d="M279 5C279 13.8366 286.163 21 295 21V19C287.268 19 281 12.732 281 5H279ZM24.2433 1H275.757V-1H24.2433V1ZM5 21C13.8366 21 21 13.8366 21 5H19C19 12.732 12.732 19 5 19V21ZM1 468.757V24.2433H-1V468.757H1ZM21 488C21 479.163 13.8366 472 5 472V474C12.732 474 19 480.268 19 488H21ZM5 504C13.8366 504 21 496.837 21 488H19C19 495.732 12.732 502 5 502V504ZM1 575.757V507.243H-1V575.757H1ZM21 595C21 586.163 13.8366 579 5 579V581C12.732 581 19 587.268 19 595H21ZM275.757 599H24.2433V601H275.757V599ZM281 595C281 587.268 287.268 581 295 581V579C286.163 579 279 586.163 279 595H281ZM299 507.243V575.757H301V507.243H299ZM279 488C279 496.837 286.163 504 295 504V502C287.268 502 281 495.732 281 488H279ZM295 472C286.163 472 279 479.163 279 488H281C281 480.268 287.268 474 295 474V472ZM299 24.2433V468.757H301V24.2433H299ZM279 489C280.105 489 281 488.105 281 487H279V489ZM273 489H279V487H273V489ZM271 487C271 488.105 271.895 489 273 489V487H271ZM273 485C271.895 485 271 485.895 271 487H273V485ZM279 485H273V487H279V485ZM281 487C281 485.895 280.105 485 279 485V487H281ZM267 487V489C268.105 489 269 488.105 269 487H267ZM267 487H269C269 485.895 268.105 485 267 485V487ZM261 487H267V485H261V487ZM261 487V485C259.895 485 259 485.895 259 487H261ZM261 487H259C259 488.105 259.895 489 261 489V487ZM267 487H261V489H267V487ZM255 489C256.105 489 257 488.105 257 487H255V489ZM249 489H255V487H249V489ZM247 487C247 488.105 247.895 489 249 489V487H247ZM249 485C247.895 485 247 485.895 247 487H249V485ZM255 485H249V487H255V485ZM257 487C257 485.895 256.105 485 255 485V487H257ZM243 487V489C244.105 489 245 488.105 245 487H243ZM243 487H245C245 485.895 244.105 485 243 485V487ZM237 487H243V485H237V487ZM237 487V485C235.895 485 235 485.895 235 487H237ZM237 487H235C235 488.105 235.895 489 237 489V487ZM243 487H237V489H243V487ZM231 489C232.105 489 233 488.105 233 487H231V489ZM225 489H231V487H225V489ZM223 487C223 488.105 223.895 489 225 489V487H223ZM225 485C223.895 485 223 485.895 223 487H225V485ZM231 485H225V487H231V485ZM233 487C233 485.895 232.105 485 231 485V487H233ZM219 487V489C220.105 489 221 488.105 221 487H219ZM219 487H221C221 485.895 220.105 485 219 485V487ZM213 487H219V485H213V487ZM213 487V485C211.895 485 211 485.895 211 487H213ZM213 487H211C211 488.105 211.895 489 213 489V487ZM219 487H213V489H219V487ZM207 489C208.105 489 209 488.105 209 487H207V489ZM201 489H207V487H201V489ZM199 487C199 488.105 199.895 489 201 489V487H199ZM201 485C199.895 485 199 485.895 199 487H201V485ZM207 485H201V487H207V485ZM209 487C209 485.895 208.105 485 207 485V487H209ZM195 487V489C196.105 489 197 488.105 197 487H195ZM195 487H197C197 485.895 196.105 485 195 485V487ZM189 487H195V485H189V487ZM189 487V485C187.895 485 187 485.895 187 487H189ZM189 487H187C187 488.105 187.895 489 189 489V487ZM195 487H189V489H195V487ZM183 489C184.105 489 185 488.105 185 487H183V489ZM177 489H183V487H177V489ZM175 487C175 488.105 175.895 489 177 489V487H175ZM177 485C175.895 485 175 485.895 175 487H177V485ZM183 485H177V487H183V485ZM185 487C185 485.895 184.105 485 183 485V487H185ZM171 487V489C172.105 489 173 488.105 173 487H171ZM171 487H173C173 485.895 172.105 485 171 485V487ZM165 487H171V485H165V487ZM165 487V485C163.895 485 163 485.895 163 487H165ZM165 487H163C163 488.105 163.895 489 165 489V487ZM171 487H165V489H171V487ZM159 489C160.105 489 161 488.105 161 487H159V489ZM153 489H159V487H153V489ZM151 487C151 488.105 151.895 489 153 489V487H151ZM153 485C151.895 485 151 485.895 151 487H153V485ZM159 485H153V487H159V485ZM161 487C161 485.895 160.105 485 159 485V487H161ZM147 487V489C148.105 489 149 488.105 149 487H147ZM147 487H149C149 485.895 148.105 485 147 485V487ZM141 487H147V485H141V487ZM141 487V485C139.895 485 139 485.895 139 487H141ZM141 487H139C139 488.105 139.895 489 141 489V487ZM147 487H141V489H147V487ZM135 489C136.105 489 137 488.105 137 487H135V489ZM129 489H135V487H129V489ZM127 487C127 488.105 127.895 489 129 489V487H127ZM129 485C127.895 485 127 485.895 127 487H129V485ZM135 485H129V487H135V485ZM137 487C137 485.895 136.105 485 135 485V487H137ZM123 487V489C124.105 489 125 488.105 125 487H123ZM123 487H125C125 485.895 124.105 485 123 485V487ZM117 487H123V485H117V487ZM117 487V485C115.895 485 115 485.895 115 487H117ZM117 487H115C115 488.105 115.895 489 117 489V487ZM123 487H117V489H123V487ZM111 489C112.105 489 113 488.105 113 487H111V489ZM105 489H111V487H105V489ZM103 487C103 488.105 103.895 489 105 489V487H103ZM105 485C103.895 485 103 485.895 103 487H105V485ZM111 485H105V487H111V485ZM113 487C113 485.895 112.105 485 111 485V487H113ZM99 487V489C100.105 489 101 488.105 101 487H99ZM99 487H101C101 485.895 100.105 485 99 485V487ZM93 487H99V485H93V487ZM93 487V485C91.8954 485 91 485.895 91 487H93ZM93 487H91C91 488.105 91.8954 489 93 489V487ZM99 487H93V489H99V487ZM87 489C88.1046 489 89 488.105 89 487H87V489ZM81 489H87V487H81V489ZM79 487C79 488.105 79.8954 489 81 489V487H79ZM81 485C79.8954 485 79 485.895 79 487H81V485ZM87 485H81V487H87V485ZM89 487C89 485.895 88.1046 485 87 485V487H89ZM75 487V489C76.1046 489 77 488.105 77 487H75ZM75 487H77C77 485.895 76.1046 485 75 485V487ZM69 487H75V485H69V487ZM69 487V485C67.8954 485 67 485.895 67 487H69ZM69 487H67C67 488.105 67.8954 489 69 489V487ZM75 487H69V489H75V487ZM63 489C64.1046 489 65 488.105 65 487H63V489ZM57 489H63V487H57V489ZM55 487C55 488.105 55.8954 489 57 489V487H55ZM57 485C55.8954 485 55 485.895 55 487H57V485ZM63 485H57V487H63V485ZM65 487C65 485.895 64.1046 485 63 485V487H65ZM51 487V489C52.1046 489 53 488.105 53 487H51ZM51 487H53C53 485.895 52.1046 485 51 485V487ZM45 487H51V485H45V487ZM45 487V485C43.8954 485 43 485.895 43 487H45ZM45 487H43C43 488.105 43.8954 489 45 489V487ZM51 487H45V489H51V487ZM39 489C40.1046 489 41 488.105 41 487H39V489ZM33 489H39V487H33V489ZM31 487C31 488.105 31.8954 489 33 489V487H31ZM33 485C31.8954 485 31 485.895 31 487H33V485ZM39 485H33V487H39V485ZM41 487C41 485.895 40.1046 485 39 485V487H41ZM27 487V489C28.1046 489 29 488.105 29 487H27ZM27 487H29C29 485.895 28.1046 485 27 485V487ZM21 487H27V485H21V487ZM21 487V485C19.8954 485 19 485.895 19 487H21ZM21 487H19C19 488.105 19.8954 489 21 489V487ZM27 487H21V489H27V487ZM295 474C296.467 474 297.938 473.486 299.057 472.593C300.183 471.693 301 470.363 301 468.757H299C299 469.638 298.56 470.43 297.809 471.03C297.05 471.636 296.02 472 295 472V474ZM301 507.243C301 505.637 300.183 504.307 299.057 503.407C297.938 502.514 296.467 502 295 502V504C296.02 504 297.05 504.364 297.809 504.97C298.56 505.57 299 506.362 299 507.243H301ZM295 581C296.467 581 297.938 580.486 299.057 579.593C300.183 578.693 301 577.363 301 575.757H299C299 576.638 298.56 577.43 297.809 578.03C297.05 578.636 296.02 579 295 579V581ZM275.757 601C277.363 601 278.693 600.183 279.593 599.057C280.486 597.938 281 596.467 281 595H279C279 596.02 278.636 597.05 278.03 597.809C277.43 598.56 276.638 599 275.757 599V601ZM19 595C19 596.467 19.5139 597.938 20.4074 599.057C21.307 600.183 22.6366 601 24.2433 601V599C23.3625 599 22.5704 598.56 21.9703 597.809C21.364 597.05 21 596.02 21 595H19ZM-1 575.757C-1 577.363 -0.183389 578.693 0.943162 579.593C2.06205 580.486 3.53284 581 5 581V579C3.97961 579 2.9504 578.636 2.19117 578.03C1.43961 577.43 1 576.638 1 575.757H-1ZM5 19C3.53285 19 2.06205 19.5139 0.943165 20.4074C-0.183384 21.307 -1 22.6366 -1 24.2433H1C1 23.3625 1.43962 22.5704 2.19118 21.9703C2.95041 21.364 3.97962 21 5 21V19ZM24.2433 -1C22.6366 -1 21.307 -0.183383 20.4074 0.943168C19.5139 2.06206 19 3.53285 19 5H21C21 3.97961 21.364 2.95041 21.9703 2.19118C22.5704 1.43961 23.3625 1 24.2433 1V-1ZM-1 468.757C-1 470.363 -0.183381 471.693 0.943168 472.593C2.06205 473.486 3.53285 474 5 474V472C3.97962 472 2.95041 471.636 2.19118 471.03C1.43961 470.43 1 469.638 1 468.757H-1ZM281 5C281 3.53285 280.486 2.06206 279.593 0.94317C278.693 -0.18338 277.363 -1 275.757 -1V1C276.638 1 277.43 1.43961 278.03 2.19118C278.636 2.95041 279 3.97962 279 5H281ZM5 502C3.53285 502 2.06205 502.514 0.943168 503.407C-0.183381 504.307 -1 505.637 -1 507.243H1C1 506.363 1.43961 505.57 2.19118 504.97C2.95041 504.364 3.97962 504 5 504V502ZM295 21C296.02 21 297.05 21.364 297.809 21.9703C298.56 22.5704 299 23.3625 299 24.2433H301C301 22.6366 300.183 21.307 299.057 20.4074C297.938 19.5139 296.467 19 295 19V21Z"
              fill="#24A0B5"
              mask="url(#path-1-inside-1_4013_715)"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_4013_715"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(150 -6.2645e-06) rotate(90) scale(83.5 150)"
            >
              <stop stopColor="#24A0B5" stopOpacity="0.5" />
              <stop offset="1" stopColor="#24A0B5" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_4013_715"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(150 619.5) rotate(-90) scale(217 150)"
            >
              <stop stopColor="#24A0B5" stopOpacity="0.5" />
              <stop offset="1" stopColor="#24A0B5" stopOpacity="0" />
            </radialGradient>
            <clipPath id="clip0_4013_715">
              <rect width="300" height="600" fill="white" />
            </clipPath>
          </defs>
          <foreignObject x="3%" y="4%" transformOrigin="50% 50%">
            <div className="nested_card">
              <h1>Techember Fest "25</h1>
              <p>
                📍 04 Rumens road, Ikoyi, Lagos <br />
                📅 March 15, 2025 | 7:00 PM
              </p>

              <div className="image_upload_svg">
                <img src={null} alt="" />
              </div>

              <div className="details_card">
                <div className="grid">
                  <div className="left">
                    <p>Enter your name</p>
                    <p className="bold">{formData.fullname}</p>
                  </div>
                  <div className="right">
                    <p>Enter your email *</p>
                    <p className="bold">{formData.email}</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="left">
                    <p>Ticket Type:</p>
                    <p className="bold">{formData.ticket_type}</p>
                  </div>
                  <div className="right">
                    <p>Ticket for :</p>
                    <p className="bold">1</p>
                  </div>
                </div>
                <p className="card_title">Special request</p>
                <p className="bold">
                  Nil ? Or the users sad story they write in there gets this
                  whole space, Max of three rows
                </p>
              </div>
            </div>
            <div className="bar_code">
              <img src={Bar_code} alt="" />
            </div>
          </foreignObject>
        </svg>
      </section>
      <div className="space_up btn_wrap">
        <button className="btn_sec" onClick={handleAnotherTicket}>
          Book Another Ticket
        </button>
        <button className="btn_primary">Download Ticket</button>
      </div>
    </div>
  );
};

export default StepThree;
