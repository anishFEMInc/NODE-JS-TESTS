<html>
<body>




<script language="javascript" type="text/javascript" >

// This function just takes to the url thread supplied

function jumpto(x){
    document.location.href = x
    
}
</script>

<form name="date1">
Enter Start Date<br>
<input type="date" id="startdate" min="2015-01-01"><br><br>
</form>
<form name="date2">
Enter End Date<br>
<input type="date" id="enddate" min="2015-01-01"><br><br>
</form>

<form name="myform">
<SELECT NAME="partner">
<option>SELECT CLIENT...</option>
<option value="https://s3.amazonaws.com/fem-inc.com/dashboards-gh-pages/layouts/hero-thirds/db_naive_dropdown.html?User_Id=inc.com">Inc</option>
<option value="https://s3.amazonaws.com/fem-inc.com/dashboards-gh-pages/layouts/hero-thirds/db_naive_dropdown.html?User_Id=spafinder.com">Spafinder</option>
<option value="https://s3.amazonaws.com/fem-inc.com/dashboards-gh-pages/layouts/hero-thirds/db_naive_dropdown.html?User_Id=www.lifescript.com">LifeScript</option>
<option value="https://s3.amazonaws.com/fem-inc.com/dashboards-gh-pages/layouts/hero-thirds/db_naive_dropdown.html?User_Id=hitfix.com">Hitfix</option>
</select>
</form>

<form>
<input type="button" onclick="test()" value="test" />
</form>


<script>
function test(){
    var startdate = document.date1.startdate.value+"T00:00:00.000Z";
    var enddate = document.date2.enddate.value+"T00:00:00.000Z";
    // Change to ISO- assume midnight 00:00:00.000
    // Can use Browser time info as well in case we do relative......
    /// keep an eye on that
    var partner = document.myform.partner.value;
    var link= partner+"&Start="+startdate+"&End="+enddate;
    jumpto(link);
    
    
}
</script>



</body>
</html>
