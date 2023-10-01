class pemain{
  constructor(x,y, warna){
    this.d = 50
    this.x = x
    this.y = y
    this.loncat = 5    
  }
  tampilkan(){
    if(this.nama ==='pemain1'){
      image(imgpemain1,this.x,this.y)
    }
    else {
      image(imgpemain2,this.x,this.y)
    }
  }
  maju(){
    this.x += this.loncat
  }
  cekfinish(){
    if(this.x >width-100){

      textSize(30)
      textAlign(CENTER)
      
      text('FINISH!!',width/2,height/6)
      noLoop()
      music.stop()
      fn.play()
      
      
  }
}
}
