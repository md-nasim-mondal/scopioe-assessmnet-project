import Container from "../../Shared/Container";
import therapyImg from "../../../assets/images/therapy.png";
import vectorImg from "../../../assets/images/vector.png";

const MessageTherapist = () => {
  return (
    <section className='bg-white dark:bg-gray-600 py-8 rounded-xl dark:text-white'>
      <Container>
        <div className='flex justify-between relative gap-20 flex-col md:flex-row'>
          <div className='space-y-6'>
            <h2 className='text-[#152A16] dark:text-white font-medium text-xl'>
              I&apos;m Looking for Message Therapist Near...
            </h2>
            <p>
              In using this site, I agree to be bound by the
              <span className='text-[#4285F3] underline ml-1 font-medium'>
                <a href='#'>Terms of Service</a>
              </span>{" "}
              <br />
              and
              <span className='text-[#4285F3] underline ml-1 font-medium'>
                <a href="#">Privacy Policy</a>
              </span>
            </p>
            <div className='hidden md:block'>
              <form className='bg-[#EEF2F5] rounded-lg p-1.5 flex'>
                <input
                  type='text'
                  name='searchField'
                  id='searchField'
                  placeholder='ZIP code or city name'
                  className='border-none bg-[#EEF2F5] flex-1 rounded-l-md'
                />
                <button
                  type='submit'
                  className='bg-[#156BCA] w-[84px] h-[40px] rounded-md text-white'>
                  Go
                </button>
              </form>
            </div>
          </div>
          <div className='z-20'>
            <img src={therapyImg} alt='therapyImg' />
          </div>
          <div className='md:hidden'>
            <form className='bg-[#EEF2F5] rounded-lg p-1.5 flex'>
              <input
                type='text'
                name='searchField'
                id='searchField'
                placeholder='ZIP code or city name'
                className='border-none bg-[#EEF2F5] flex-1 rounded-l-md'
              />
              <button
                type='submit'
                className='bg-[#156BCA] w-[84px] h-[40px] rounded-md text-white'>
                Go
              </button>
            </form>
          </div>
          <div className='absolute md:right-[5%] z-10 bottom-[25%] md:bottom-0'>
            <img src={vectorImg} alt='vectorImg' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MessageTherapist;
