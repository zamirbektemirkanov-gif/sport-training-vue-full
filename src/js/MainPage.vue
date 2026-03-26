<template>
    <div>
        <Nav />
        <Head />
        <Courses :data="courses" />
        <Features />
        <Videos />
        <Footer />
    </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Head from './components/Head.vue'
import Courses from './components/Courses.vue'
import Features from './components/Features.vue'
import Videos from './components/Videos.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Nav, Head, Courses, Features, Videos, Footer },
    data() {
        return {
            courses: [
                {'title': 'Кардио', 'cl': '250 калорий', 'time': '58:24', 'img': 'cardio.png'},
                {'title': 'Растяжка', 'cl': '250 калорий', 'time': '58:24', 'img': 'stretch.png'},
                {'title': 'Йога', 'cl': '250 калорий', 'time': '58:24', 'img': 'joga.png'},
                {'title': 'Бег', 'cl': '250 калорий', 'time': '58:24', 'img': 'run.png'},
                {'title': 'Гантели', 'cl': '250 калорий', 'time': '58:24', 'img': 'metal.png'},
                {'title': 'На улице', 'cl': '250 калорий', 'time': '58:24', 'img': 'street.png'},
            ]
        }
    }
}
</script>

<style lang="scss">

</style>