<template>
    <div>
        <label class="formItem">
            <span class="name">{{this.fieldName}}</span>
            <input type="text"
                    :value="value"
                   @input="onChildChanged($event.target.value)"
                   :placeholder="placeholder">
        </label>
    </div>
</template>
//v-model="x" => :value="x"  @input="x=$event.target.value" v-model="value"

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
      @Prop({default:''}) readonly value!: string;

      @Prop({required:true}) fieldName!: string
      @Prop() placeholder?: string

      onChildChanged(value: string) {
          this.$emit('update:value',value)
      }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .formItem {
        font-size: 14px;
        background: #f5f5f5;
        padding-left: 16px;
        display: flex;
        align-items: center;
        .name {
            padding-right: 16px;
        }
        input {
            height: 48px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>