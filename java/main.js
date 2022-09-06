$(document).ready(function(){

    $('.my-fixed').click(function(e){
        e.preventDefault();
      
        $('.barSide').toggleClass('active')
       
    });


})
const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec'

];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(51, 103, 235)',
    borderColor: 'rgb(51, 103, 235)',
    data: [1000, 902, 1170, 920, 850, 700, 850,1100 ,1150 ,1000 ,900 , 1250 ],
    barPercentage: 0.5,
    barThickness: 22,
    maxBarThickness: 15,
    minBarLength: 2,
    borderRadius: 5,
    order: 2
  },{
    type: 'bar',
    label: 'Bar Dataset',
    data: [850, 775, 900, 800, 725, 640, 725,870 ,895 ,850 ,750 , 950 ],
    backgroundColor: '#d0dcec',
    borderColor: '#d0dcec',
    borderRadius: 5,
    barPercentage: 0.5,
    barThickness: 15,
    maxBarThickness: 15,
    minBarLength: 2,
    
}]
};

const config = {
  type: 'bar',
  data: data,
  options: { }
};


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



const mytext1={
id:'mytext1',
afterDraw(chart,args,options){
    const {ctx, chartArea:{left,right,top,bottom,width,height}}=chart;
ctx.save();

ctx.font='bold 30px Arial';
ctx.textAlign='center';
ctx.fillStyle='black';
ctx.fillText('97.14%',width/2,height/2)
}
}

const mytext2={
    id:'mytext2',
    afterDraw(chart,args,options){
        const {ctx, chartArea:{left,right,top,bottom,width,height}}=chart;
    ctx.save();
    
    ctx.font='bold 25px Arial';
    ctx.textAlign='center';
    ctx.fillStyle='#cdd2f8';
    ctx.fillText('Website growth',width/2,height/1.5)
    }
    }


  const data2 = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [100, 50, 150,75],
          backgroundColor: [
        '#96c0ff',
        '#ceefd3',
        '#3669e9',
        '#cdd2f8'
      ],
      borderColor:[
        '#96c0ff',
        '#ceefd3',
        '#3669e9',
        '#cdd2f8'
      ],
      hoverOffset: 5,
      spacing:0,
      cutout:'90%',
      borderRadius: 2,
    }]
  };

  const config2 = {
    type: 'doughnut',
    data: data2,
    plugins: [mytext1,mytext2]
  };

  const myChart2 = new Chart(
    document.getElementById('mycircle'),
    config2
  );











  const labels2 = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
  
  
  ];
  const data22 = {
    labels: labels2,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      barPercentage: 0.5,
      barThickness: 22,
      maxBarThickness: 15,
      minBarLength: 2,
      borderRadius: 5,
      order: 2
    },{
      type: 'line',
      label: 'My last Dataset',
      data: [69, 52, 84, 85, 59, 58, 45 ],
      backgroundColor: '#d0dcec',
      borderColor: '#d0dcec',
      borderRadius: 5,
      barPercentage: 0.5,
      barThickness: 15,
      maxBarThickness: 15,
      minBarLength: 2,
      
  }]
  };




const config3 = {
  type: 'line',
  data: data22,
  options: { }
};

const myChart3 = new Chart(
  document.getElementById('mycircle3'),
  config3
);