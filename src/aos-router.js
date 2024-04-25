import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    install: (app, { router }) => {
        router.afterEach(() => {
            AOS.refresh();
        });
    },
};