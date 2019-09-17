<template>
    <button class="w-button" :class="{[`icon-${iconPosition}`]: true}">
        <w-icon v-if="icon" class="icon" :name="icon"></w-icon>
        <w-icon v-if="icon" class="icon loading" :name="icon"></w-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        // props: ['icon','iconPosition']
        props: {
            icon: {},
            iconPosition: {
                type:String,
                default: 'left',
                validator(value){
                    // 属性检查器，必须是left或者right
                    return value === 'left' || value === 'right';
                }
            }
        }
}
</script>
<style lang="scss">
    .w-button {
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            border-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
            margin-left: 0;
        }
        > .content{
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
            > .content{
                order: 1;
            }
        }
        .loading{
            animation: spin 1.5s infinite linear;
        }
    }
</style>