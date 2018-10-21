<template>
    <transition v-if="show_modal" name="modal">
        <div id="login">
            <div class="modal-mask login-modals" @click="close">
                <div class="modal-wrapper">
                    <div class="modal-container form-main" @click="stopbubble">
                        <component :is="component_name"></component>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import LoginContainer from './components/LoginContainer.vue';
export default {
    computed: {
        show_modal() {
            return this.$store.state.show_modal;
        },
        component_name() {
            return "login-container"
        }
    },
    methods: {
        close() {
            this.$store.commit('TOGGLE_MODAL')
        },
        stopbubble() {
            if(event.stopPropagation) {
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
        }
    },
    components: {
        LoginContainer
    }
}
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        transition: opacity .3s ease-out;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .modal-wrapper {
        vertical-align: middle;
    }
    .modal-container {
        width: 50%;
        height: 50vh;
        margin: 0px auto;
        background-color: white;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0,0,0,.33);
        transition: all .3s ease;
        font-family: 'Courier New', Courier, monospace
    }
    .modal-enter {
        opacity: 0px;
    }
    .modal-leave-out {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-out .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1)
    }
</style>
