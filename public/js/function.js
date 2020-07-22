
$(document).ready(function(){function a(){$("#new-name").val("")}function b(){$("#start-date").val(""),$("#end-date").val(""),$("#start-time").val(""),$("#end-time").val("")}function c(){$.ajax({url:"/api/employee",method:"GET"}).then(function(a){$("#employee-select").empty();for(let b,c=0;c<a.length;c++)b=a[c].name,$(`<option value="${b}">${b}</option>`).appendTo("#employee-select");$("#employee-select").formSelect()})}function d(){$.ajax({url:"/api/events",method:"GET"}).then(function(a){$(".tbody").empty();for(let b=0;b<a.length;b++){let c=a[b].id,d=a[b].name,e=a[b].startTime,f=a[b].endTime,g=a[b].startDate,h=a[b].endDate;$(`<tr>
                <td>${d}</td>
                <td>${g} ${e}</td>
                <td>${h} ${f}</td>
                <td class="right-align">
                <button id="${c}" class="delete-btn btn-custom waves-effect waves-light btn-small">Delete</button>
                </td>
                </tr>`).appendTo(".tbody")}})}function e(){$.ajax({url:"/api/employee",method:"GET"}).then(function(a){$("#tbody-edit").empty();for(let b=0;b<a.length;b++){let c=a[b].id,d=a[b].name;$(`<tr>
                <td>${d}</td>
                <td class="right-align">
                <button id="${c}" class="delete-Edt btn-custom waves-effect waves-light btn-small">Delete</button>
                </td>
                </tr>`).appendTo("#tbody-edit")}})}$("#save-empl").click(function(){var b=$("#new-name").val();$.ajax({url:"/api/employee",method:"POST",data:{name:b}}).then(function(){a(),d(),c(),e()})}),$("#save-sched").click(function(){let a=$("#employee-select option:selected").text(),c=$("#start-date").val(),e=$("#end-date").val(),f=$("#start-time").val(),g=$("#end-time").val(),h=$("#color-option option:selected").attr("value");$.ajax({url:"/api/events",method:"POST",data:{name:a,startDate:c,endDate:e,startTime:f,endTime:g,color:h}}).then(function(){b(),d()})}),$(document).on("click",".delete-btn",function(a){let b=a.target.id;$.ajax({url:"/api/events/"+b,method:"DELETE"}).then(()=>{d()})}),$(document).on("click","#cancel-add",a);$(document).on("click",".delete-Edt",function(a){let b=a.target.id;$.ajax({url:"/api/employee/"+b,method:"DELETE"}).then(()=>{e()})}),d(),c(),e()});