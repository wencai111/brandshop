<template>
  <div class="wrapper" id="app">
    <div class="courseListPage">
      <section
        class="topbanner bgCover" v-bind:style="{backgroundImage:'url('+require('../../assets/member/course_list_banner.jpg')+')'}">
        <div class="container">
          <div class="layout">
            <p>课程目录</p>
            <h2>已购买的课程</h2>
          </div>
        </div>
      </section>
      <section class="stickyBlock">
        <div class="container">
          <ul v-if="courses.length>0">
            <li v-for="item in courses" v-bind:key="item.CourseId" >
              <a href="javascript:void(0)" v-on:click="goPurchaseDayCourseInfoList.bind(item)"  >
                <div class="bgCover"  v-bind:style="{backgroundImage:'url('+require('../../assets/upload/member/course.jpg')+')'}"></div>
                <h3>{{item.CourseName}}</h3>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {getCourses} from '@/api/my'
import { getToken } from "@/libs/util";
export default {
  name: "List",
  data(){
    return {
      courses: []
    }
  },
  created: function() {
    getCourses(getToken())
      .then(res => {
          this.courses=res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    // 计算属性的 getter
    coursesTotal: function() {
      // `this` 指向 vm 实例
      return this.courses.length;
    }
  },
   methods: {
       goPurchaseDayCourseInfoList:function(){
// v-bind:href="['/WeChatCourseUser/PurchaseDayCourseInfoList?CourseId='+ item.CourseId+'&UserId='+item.UserId+'&ScheduleId='+item.ScheduleId+'&CourseName='+item.CourseName+'&CourseLong='+item.CourseLong+'&StartTime='+item.PostStartTime+'&EndTime='+item.PostEndTime]"
       }

   }
};
</script>

<style>
.courseListPage .topbanner{
  height: 30vh;}
.courseListPage .topbanner .layout{
  padding-top: 20px;
  color: #545454;}
.courseListPage .topbanner .layout p{
  font-weight: 900;}
.courseListPage .stickyBlock{
  height: 70vh;
  overflow: auto;}
.courseListPage .stickyBlock ul li a{
  display: block;
  padding: 12px;
  margin: 25px 10px;
  background-color: #fff;
  box-shadow: 3px 6px 15px #0000002b;}
.courseListPage .stickyBlock ul li a .bgCover{
  height: 138px;}
.courseListPage .stickyBlock ul li a h3{
  margin: 10px 0 0;
  color: #484848;}
</style>


