import FooterMenu from './FooterMenu';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <div className=''>
      <div className="container mx-auto px-6 mb-12 md:px-12 xl:px-32">
        <div className="text-center">
          <div
            className="block rounded-3xl px-6 py-12 md:py-12 md:px-12"
            style={{
              marginBottom: "-130px",
              background: "hsla(261, 100%, 64%, 0.3)",
              backdropFilter: "blur(30px)",
            }}
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white">
              Get In Tuch With Us
            </h1>
          </div>
        </div>
      </div>
      <div className="pt-20 bg-[#0f2146] text-primary-text">
        <FooterMenu />
        <FooterLink />
      </div>
    </div>
  );
}

export default Footer