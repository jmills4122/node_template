window.onload = function () {
  // piece and board Loading
  var placingPieceDown = document.createElement('AUDIO');
   placingPieceDown.src = '/placingPieceDown.wav';
  var promotion = document.createElement('AUDIO');
   promotion.src = '/promotion.wav';
//initialazation of all page variables
  var s1  = Snap("#svg")

  Snap.load('gameBoard.svg', function(s){
    s1.append(s);

  var  spaces = [],
      P1Pieces = [] ,
      P2Pieces = [] ,
      P1CapArea = [],
      P2CapArea = [],
      InfoBoxes = [],
      promoPiece,
      Promox,
      promoy,
      promospace,
      PlayerOneTurn = s1.select('#PlayerOneTurn'),
      PlayerOneWin = s1.select('#PlayerOneWin'),
      PlayerTwoTurn = s1.select('#PlayerTwoTurn'),
      PlayerTwoWin = s1.select('#PlayerTwoWins'),
      InfoBox = s1.select('#TutorialRect'),
      InfoToggle = s1.select('#InfoToggle'),
      PlayAgain = s1.select('#PlayAgain'),
      P1Promote = s1.select('#P1Promote'),
      P1PYes =  s1.select('#P1PYes'),
      P1PNo =  s1.select('#P1PNo'),
      P2Promote = s1.select('#P2Promote'),
      P2PYes =  s1.select('#P2PYes'),
      P2PNo =  s1.select('#P2PNo'),
      Lastx = 0,
      Lasty = 0,
      debug,
      P1CapCount = 1,
      P2CapCount = 1;





  initializeBoard();



      //console.log(Player2CaptureArea);
  function initializeInfoBoxes(){
          InfoBoxes[0] = s1.select("#LanceInfo");
          InfoBoxes[1] = s1.select("#LancePInfo");
          InfoBoxes[2] = s1.select("#PawnInfo");
          InfoBoxes[3] = s1.select("#PawnPInfo");
          InfoBoxes[4] = s1.select("#SilverInfo");
          InfoBoxes[5] = s1.select("#SilverPInfo");
          InfoBoxes[6] = s1.select("#GoldInfo");
          InfoBoxes[7] = s1.select("#RookInfo");
          InfoBoxes[8] = s1.select("#RookPInfo");
          InfoBoxes[9] = s1.select("#BishopPInfo");
          InfoBoxes[10] = s1.select("#BishopInfo");
          InfoBoxes[11] = s1.select("#KnightInfo");
          InfoBoxes[12] = s1.select("#KnightPInfo");
          InfoBoxes[13] = s1.select("#KingInfo");
  }


  function intializedP1Capzone()
  {

    for(var i = 1; i<=18 ;i++)
    {
      P1CapArea[i] = s1.select('#P1C'+i)
    }

  }

  function intializedP2Capzone()
  {

    for(var i = 1; i<=18 ;i++)
    {
      P2CapArea[i] = s1.select('#P2C'+i)
    }

  }


  //initalizes the pieces for player One
  function initializePlayer1Pieces()
  {
    //initializes the needed classes and information for pawn pieces of player one
    for(var i = 1; i<=9 ;i++ ){
      P1Pieces[i] = s1.select("#Pawn"+ i +"P1");
      P1Pieces[i].addClass('canPromote');
      P1Pieces[i].data('promotionlocation', (20+i));
      spaces[i-1][2].addClass('PlayerOneOn');
      P1Pieces[i].addClass('Pawn');
      P1Pieces[i].addClass('location'+(i-1)+'2');
      P1Pieces[i].data('originalLocationX', spaces[i-1][2].node.cx.baseVal.value);
      P1Pieces[i].data('originalLocationY', spaces[i-1][2].node.cy.baseVal.value);
    }
      //initializes the needed classes and information for the rook piece of player one
      P1Pieces[10] = s1.select("#RookP1");
      P1Pieces[10].addClass('canPromote');
      P1Pieces[10].data('promotionlocation', 30);
      spaces[1][1].addClass('PlayerOneOn');
      P1Pieces[10].addClass('Rook');
      P1Pieces[10].addClass('location11');
      P1Pieces[10].data('originalLocationX', spaces[1][1].node.cx.baseVal.value);
      P1Pieces[10].data('originalLocationY', spaces[1][1].node.cy.baseVal.value);
      //initializes the needed classes and information for the bishop piece of player one
      P1Pieces[11] = s1.select("#BishopP1");
      P1Pieces[11].addClass('canPromote');
      P1Pieces[11].data('promotionlocation', 31);
      spaces[7][1].addClass('PlayerOneOn');
      P1Pieces[11].addClass('Bishop');
      P1Pieces[11].addClass('location71');
      P1Pieces[11].data('originalLocationX', spaces[7][1].node.cx.baseVal.value);
      P1Pieces[11].data('originalLocationY', spaces[7][1].node.cy.baseVal.value);
      //initializes the needed classes and information for the King piece of player one
      P1Pieces[12] = s1.select("#KgP1");;
      spaces[4][0].addClass('PlayerOneOn');
      P1Pieces[12].addClass('King');
      P1Pieces[12].addClass('location40');
      P1Pieces[12].data('originalLocationX', spaces[4][0].node.cx.baseVal.value);
      P1Pieces[12].data('originalLocationY', spaces[4][0].node.cy.baseVal.value);
      //initializes the needed classes and information for GoldGeneral pieces of player one
      P1Pieces[13] = s1.select("#GoldGeneral1P1");
      spaces[3][0].addClass('PlayerOneOn');
      P1Pieces[13].addClass('GoldGeneral');
      P1Pieces[13].addClass('location30');
      P1Pieces[13].data('originalLocationX', spaces[3][0].node.cx.baseVal.value);
      P1Pieces[13].data('originalLocationY', spaces[3][0].node.cy.baseVal.value);
      P1Pieces[14] = s1.select("#GoldGeneral2P1");
      spaces[5][0].addClass('PlayerOneOn');
      P1Pieces[14].addClass('GoldGeneral');
      P1Pieces[14].addClass('location50');
      P1Pieces[14].data('originalLocationX', spaces[5][0].node.cx.baseVal.value);
      P1Pieces[14].data('originalLocationY', spaces[5][0].node.cy.baseVal.value);
      //initializes the needed classes and information for SilverGeneral pieces of player one
      P1Pieces[15] = s1.select("#SilverGeneral1P1");
      P1Pieces[15].addClass('canPromote');
      P1Pieces[15].data('promotionlocation', 32);
      spaces[2][0].addClass('PlayerOneOn');
      P1Pieces[15].addClass('SilverGeneral');
      P1Pieces[15].addClass('location20');
      P1Pieces[15].data('originalLocationX', spaces[2][0].node.cx.baseVal.value);
      P1Pieces[15].data('originalLocationY', spaces[2][0].node.cy.baseVal.value);
      P1Pieces[16] = s1.select("#SilverGeneral2P1");
      P1Pieces[16].addClass('canPromote');
      P1Pieces[16].data('promotionlocation', 33);
      spaces[6][0].addClass('PlayerOneOn');
      P1Pieces[16].addClass('SilverGeneral');
      P1Pieces[16].addClass('location60');
      P1Pieces[16].data('originalLocationX', spaces[6][0].node.cx.baseVal.value);
      P1Pieces[16].data('originalLocationY', spaces[6][0].node.cy.baseVal.value);
      //initializes the needed classes and information for Knight pieces of player one
      P1Pieces[17] = s1.select("#Knight1P1");
      P1Pieces[17].addClass('canPromote');
      P1Pieces[17].data('promotionlocation', 34);
      spaces[1][0].addClass('PlayerOneOn');
      P1Pieces[17].addClass('Knight');
      P1Pieces[17].addClass('location10');
      P1Pieces[17].data('originalLocationX', spaces[1][0].node.cx.baseVal.value);
      P1Pieces[17].data('originalLocationY', spaces[1][0].node.cy.baseVal.value);
      P1Pieces[18] = s1.select("#Knight2P1");
      P1Pieces[18].addClass('canPromote');
      P1Pieces[18].data('promotionlocation', 35);
      spaces[7][0].addClass('PlayerOneOn');
      P1Pieces[18].addClass('Knight');
      P1Pieces[18].addClass('location70');
      P1Pieces[18].data('originalLocationX', spaces[7][0].node.cx.baseVal.value);
      P1Pieces[18].data('originalLocationY', spaces[7][0].node.cy.baseVal.value);
      //initializes the needed classes and information for Lance pieces of player one
      P1Pieces[19] = s1.select("#Lance1P1");
      P1Pieces[19].addClass('canPromote');
      P1Pieces[19].data('promotionlocation', 36);
      spaces[0][0].addClass('PlayerOneOn');
      P1Pieces[19].addClass('Lance');
      P1Pieces[19].addClass('location00');
      P1Pieces[19].data('originalLocationX', spaces[0][0].node.cx.baseVal.value);
      P1Pieces[19].data('originalLocationY', spaces[0][0].node.cy.baseVal.value);
      P1Pieces[20] = s1.select("#Lance2P1");
      P1Pieces[20].addClass('canPromote');
      P1Pieces[20].data('promotionlocation', 37);
      spaces[8][0].addClass('PlayerOneOn');
      P1Pieces[20].addClass('Lance');
      P1Pieces[20].addClass('location80');
      P1Pieces[20].data('originalLocationX', spaces[8][0].node.cx.baseVal.value);
      P1Pieces[20].data('originalLocationY', spaces[8][0].node.cy.baseVal.value);
        //initializes promoted pieces
      for(var i = 1; i<=9 ;i++ ){
        P1Pieces[20+i] = s1.select("#PPromoted"+ i +"P1");
        P1Pieces[20+i].addClass('PawnP');
      }
      P1Pieces[30] = s1.select("#RPromotedP1");
      P1Pieces[30].addClass('RookP');
      P1Pieces[31] = s1.select("#BPromotedP1");
      P1Pieces[31].addClass('BishopP');
      P1Pieces[32] = s1.select("#SPromoted1P1");
      P1Pieces[32].addClass('SilverGeneralP');
      P1Pieces[33] = s1.select("#SPromoted2P1");
      P1Pieces[33].addClass('SilverGeneralP');
      P1Pieces[34] = s1.select("#KPromoted1P1");
      P1Pieces[34].addClass('KnightP');
      P1Pieces[35] = s1.select("#KPromoted2P1");
      P1Pieces[35].addClass('KnightP');
      P1Pieces[36] = s1.select("#LPromoted1P1");
      P1Pieces[36].addClass('LanceP');
      P1Pieces[37] = s1.select("#LPromoted2P1");
      P1Pieces[37].addClass('LanceP');
      console.log(P1Pieces);
      //sets inital player flag to player1
      for(var i = 1; i<=37 ;i++ ){
        P1Pieces[i].addClass('P1Pieces')
      }



      return ;
  }
  //initalizes the pieces for player Two
  function initializePlayer2Pieces()
  {

    //initializes the needed classes and information for pawn pieces of player two
    for(var i = 1; i<=9 ;i++ ){
      P2Pieces[i] = s1.select("#Pawn"+ i +"P2");
      P2Pieces[i].addClass('canPromote');
      P2Pieces[i].data('promotionlocation', (20+i));
      spaces[i-1][6].addClass('PlayerTwoOn');
      P2Pieces[i].addClass('Pawn');
      P2Pieces[i].addClass('location'+(i-1)+'6');
      P2Pieces[i].data('originalLocationX', spaces[i-1][6].node.cx.baseVal.value);
      P2Pieces[i].data('originalLocationY', spaces[i-1][6].node.cy.baseVal.value);
    }
      //initializes the needed classes and information for Rook piece of player two
      P2Pieces[10] = s1.select("#RookP2");
      P2Pieces[10].addClass('canPromote');
      P2Pieces[10].data('promotionlocation', 30);
      spaces[7][7].addClass('PlayerTwoOn');
      P2Pieces[10].addClass('Rook');
      P2Pieces[10].addClass('location77');
      P2Pieces[10].data('originalLocationX', spaces[7][7].node.cx.baseVal.value);
      P2Pieces[10].data('originalLocationY', spaces[7][7].node.cy.baseVal.value);
      //initializes the needed classes and information for Bishop piece of player two
      P2Pieces[11] = s1.select("#BishopP2");
      P2Pieces[11].addClass('canPromote');
      P2Pieces[11].data('promotionlocation', 31);
      spaces[1][7].addClass('PlayerTwoOn');
      P2Pieces[11].addClass('Bishop');
      P2Pieces[11].addClass('location17');
      P2Pieces[11].data('originalLocationX', spaces[1][7].node.cx.baseVal.value);
      P2Pieces[11].data('originalLocationY', spaces[1][7].node.cy.baseVal.value);
      //initializes the needed classes and information for King piece of player two
      P2Pieces[12] = s1.select("#KgP2");
      spaces[4][8].addClass('PlayerTwoOn');
      P2Pieces[12].addClass('King');
      P2Pieces[12].addClass('location48');
      P2Pieces[12].data('originalLocationX', spaces[4][8].node.cx.baseVal.value);
      P2Pieces[12].data('originalLocationY', spaces[4][8].node.cy.baseVal.value);
      //initializes the needed classes and information for GoldGeneral pieces of player two
      P2Pieces[13] = s1.select("#GoldGeneral1P2");
      spaces[3][8].addClass('PlayerTwoOn');
      P2Pieces[13].addClass('GoldGeneral');
      P2Pieces[13].addClass('location38');
      P2Pieces[13].data('originalLocationX', spaces[3][8].node.cx.baseVal.value);
      P2Pieces[13].data('originalLocationY', spaces[3][8].node.cy.baseVal.value);
      P2Pieces[14] = s1.select("#GoldGeneral2P2");
      spaces[5][8].addClass('PlayerTwoOn');
      P2Pieces[14].addClass('GoldGeneral');
      P2Pieces[14].addClass('location58');
      P2Pieces[14].data('originalLocationX', spaces[5][8].node.cx.baseVal.value);
      P2Pieces[14].data('originalLocationY', spaces[5][8].node.cy.baseVal.value);
      //initializes the needed classes and information for SilverGeneral pieces of player two
      P2Pieces[15] = s1.select("#SilverGeneral1P2");
      P2Pieces[15].addClass('canPromote');
      P2Pieces[15].data('promotionlocation', 32);
      spaces[2][8].addClass('PlayerTwoOn');
      P2Pieces[15].addClass('SilverGeneral');
      P2Pieces[15].addClass('location28');
      P2Pieces[15].data('originalLocationX', spaces[2][8].node.cx.baseVal.value);
      P2Pieces[15].data('originalLocationY', spaces[2][8].node.cy.baseVal.value);
      P2Pieces[16] = s1.select("#SilverGeneral2P2");
      P2Pieces[16].addClass('canPromote');
      P2Pieces[16].data('promotionlocation', 33);
      spaces[6][8].addClass('PlayerTwoOn');
      P2Pieces[16].addClass('SilverGeneral');
      P2Pieces[16].addClass('location68');
      P2Pieces[16].data('originalLocationX', spaces[6][8].node.cx.baseVal.value);
      P2Pieces[16].data('originalLocationY', spaces[6][8].node.cy.baseVal.value);
      //initializes the needed classes and information for Knight pieces of player two
      P2Pieces[17] = s1.select("#Knight1P2");
      P2Pieces[17].addClass('canPromote');
      P2Pieces[17].data('promotionlocation', 34);
      spaces[1][8].addClass('PlayerTwoOn');
      P2Pieces[17].addClass('Knight');
      P2Pieces[17].addClass('location18');
      P2Pieces[17].data('originalLocationX', spaces[1][8].node.cx.baseVal.value);
      P2Pieces[17].data('originalLocationY', spaces[1][8].node.cy.baseVal.value);
      P2Pieces[18] = s1.select("#Knight2P2");
      P2Pieces[18].addClass('canPromote');
      P2Pieces[18].data('promotionlocation', 35);
      spaces[7][8].addClass('PlayerTwoOn');
      P2Pieces[18].addClass('Knight');
      P2Pieces[18].addClass('location78');
      P2Pieces[18].data('originalLocationX', spaces[7][8].node.cx.baseVal.value);
      P2Pieces[18].data('originalLocationY', spaces[7][8].node.cy.baseVal.value);
      //initializes the needed classes and information for Lance pieces of player two
      P2Pieces[19] = s1.select("#Lance1P2");
      P2Pieces[19].addClass('canPromote');
      P2Pieces[19].data('promotionlocation', 36);
      spaces[0][8].addClass('PlayerTwoOn');
      P2Pieces[19].addClass('Lance');
      P2Pieces[19].addClass('location08');
      P2Pieces[19].data('originalLocationX', spaces[0][8].node.cx.baseVal.value);
      P2Pieces[19].data('originalLocationY', spaces[0][8].node.cy.baseVal.value);
      P2Pieces[20] = s1.select("#Lance2P2");
      P2Pieces[20].addClass('canPromote');
      P2Pieces[20].data('promotionlocation', 37);
      spaces[8][8].addClass('PlayerTwoOn');
      P2Pieces[20].addClass('Lance');
      P2Pieces[20].addClass('location88');
      P2Pieces[20].data('originalLocationX', spaces[8][8].node.cx.baseVal.value);
      P2Pieces[20].data('originalLocationY', spaces[8][8].node.cy.baseVal.value);

    //initializes promoted pieces
    for(var i = 1; i<=9 ;i++ ){
      P2Pieces[20+i] = s1.select("#PPromoted"+ i +"P2");
      P2Pieces[20+i].addClass('PawnP');
    }

      P2Pieces[30] = s1.select("#RPromotedP2");
      P2Pieces[30].addClass('RookP');
      P2Pieces[31] = s1.select("#BPromotedP2");
      P2Pieces[31].addClass('BishopP');
      P2Pieces[32] = s1.select("#SPromoted1P2");
      P2Pieces[32].addClass('SilverGeneralP');
      P2Pieces[33] = s1.select("#SPromoted2P2");
      P2Pieces[33].addClass('SilverGeneralP');
      P2Pieces[34] = s1.select("#KPromoted1P2");
      P2Pieces[34].addClass('KnightP');
      P2Pieces[35] = s1.select("#KPromoted2P2");
      P2Pieces[35].addClass('KnightP');
      P2Pieces[36] = s1.select("#LPromoted1P2");
      P2Pieces[36].addClass('LanceP');
      P2Pieces[37] = s1.select("#LPromoted2P2");
      P2Pieces[37].addClass('LanceP');
      console.log(P2Pieces);
      //sets inital player flag to player2
      for(var i = 1; i<=37 ;i++ ){
        P2Pieces[i].addClass('P2Pieces');
      }



      return ;
  }

  function initializeBoard()
  {

    for(var x = 0; x < 9; x ++){
      spaces [x] = [];

        for(var y = 0; y < 9; y ++){
          spaces[x][y]= s1.select("#c"+x+y);

          if(y<=2)spaces[x][y].addClass('Player2PZone');
          if(y>=6)spaces[x][y].addClass('Player1PZone');
          }

        }
        console.log(spaces);
        initializePlayer1Pieces();
        initializePlayer2Pieces();
        intializedP1Capzone();
        intializedP2Capzone();
        initializeInfoBoxes();
        s1.addClass('P1Turn');
        PlayerOneTurn.attr({'opacity':'1'})
        return;

  }




  //initializes all spaces to either player empty or enemy and sets all original classes and data for pieces


    function promotePiece(piece,space,x,y){

      var promotedPiece,
        BBox;

      if(s1.hasClass('P1Turn'))
      {
        console.log("Is registrared as captured: "+ piece.hasClass('P1CapturedPiece'));
        if(piece.hasClass('P1CapturedPiece')){
          promotedPiece = P2Pieces[piece.data('promotionlocation')];
          console.log("Caped piece promo (Player1)")
        }
        else{
          promotedPiece = P1Pieces[piece.data('promotionlocation')];
        }
        promotedPiece.addClass('location'+x+y);
        piece.removeClass('location'+Lastx+Lasty);
        BBox = promotedPiece.getBBox();
        promotedPiece.data('originalLocationX',BBox.cx);
        promotedPiece.data('originalLocationY',BBox.cy);
        transMatrix = promotedPiece.matrix;
        if(piece.hasClass('P1CapturedPiece')){

          transMatrix.scale('1','-1', promotedPiece.data('originalLocationX'),promotedPiece.data('originalLocationY'));
          transMatrix.translate((space.node.cx.baseVal.value-BBox.cx),((space.node.cy.baseVal.value-BBox.cy)*-1));
          promotedPiece.removeClass('P2Pieces')
          promotedPiece.addClass('P1Pieces')
          promotedPiece.addClass('P1CapturedPiece')
        }
        else{
          transMatrix.translate((space.node.cx.baseVal.value-BBox.cx),(space.node.cy.baseVal.value-BBox.cy));
        }
        promotedPiece.attr({'opacity':'1',transform: transMatrix});
        transMatrix.translate(0,0);
        piece.attr({'opacity':'0',transform: transMatrix});
        promotion.play();


      }
      if(s1.hasClass('P2Turn'))
      {
        console.log(piece);


        if(piece.hasClass('P2CapturedPiece')){
          promotedPiece = P1Pieces[piece.data('promotionlocation')];
          console.log("Caped piece promo (Player2)")


        }
        else{
          promotedPiece = P2Pieces[piece.data('promotionlocation')];
        }
        promotedPiece.addClass('location'+x+y);
        piece.removeClass('location'+Lastx+Lasty);
        BBox = promotedPiece.getBBox();
        promotedPiece.data('originalLocationX',BBox.cx);
        promotedPiece.data('originalLocationY',BBox.cy);
        transMatrix = promotedPiece.matrix;
        if(piece.hasClass('P2CapturedPiece')){

          transMatrix.scale('1','-1', promotedPiece.data('originalLocationX'),promotedPiece.data('originalLocationY'));
          transMatrix.translate((space.node.cx.baseVal.value-BBox.cx),((space.node.cy.baseVal.value-BBox.cy)*-1));
          promotedPiece.removeClass('P1Pieces');
          promotedPiece.addClass('P2Pieces');
          promotedPiece.addClass('P2CapturedPiece');
        }
        else{
          transMatrix.translate((space.node.cx.baseVal.value-BBox.cx),(space.node.cy.baseVal.value-BBox.cy));
        }
        promotedPiece.attr({'opacity':'1',transform: transMatrix});
        transMatrix.translate(0,0);
        piece.attr({'opacity':'0',transform: transMatrix});
        promotion.play();

      }
      console.log("See if my location got scrubed")
      console.log(piece);
      console.log("My x "+ x + " and y "+y )
      console.log("My last x "+ Lastx + " and y "+ Lasty )



    }

    function updateGridAttack(x,y,newclass)
    {
      if(spaces[x][y].hasClass('PlayerOneOn'))
      spaces[x][y].removeClass('PlayerOneOn');
      if(spaces[x][y].hasClass('PlayerTwoOn'))
      spaces[x][y].removeClass('PlayerTwoOn');

      spaces[x][y].addClass(newclass);
      console.log(spaces[x][y]);
    }

    function clearBoard(spaces){
      for(var x = 0; x < 9; x ++){
          for(var y = 0; y < 9; y ++){
            spaces[x][y].attr({'fill':'#ffffff'});

          }
      }
    }

    function updateP1CapCount(){
      for(var i = 1; i <= P1CapArea.length; i++)
      {
        if(!P1CapArea[i].hasClass('Occupied')){
          P1CapCount = i;
          return;
        }
      }
    }

    function updateP2CapCount(){
      for(var i = 1; i <= P2CapArea.length; i++)
      {
        if(!P2CapArea[i].hasClass('Occupied')){
          P2CapCount = i;
          return;
        }
      }
    }

    function Promostate(){
      if(s1.hasClass('P1Turn'))
      {
        if(promoPiece.hasClass('Pawn')&& Promoy == 8)
        {
          promotePiece(promoPiece,promospace,Promox,Promoy);
          clearBoard(spaces);
          updateGridAttack(Promox,Promoy,'PlayerOneOn');
          updateGridAttack(Lastx,Lasty);
          s1.removeClass('P1Turn');
          s1.addClass('P2Turn');
          PlayerOneTurn.attr({'opacity':'0'});
          PlayerTwoTurn.attr({'opacity':'1'});
          return;
        }
        if(promoPiece.hasClass('Knight')&&Promoy >= 7)
        {
          promotePiece(promoPiece,promospace,Promox,Promoy);
          clearBoard(spaces);
          updateGridAttack(Promox,Promoy,'PlayerOneOn');
          updateGridAttack(Lastx,Lasty);
          s1.removeClass('P1Turn');
          s1.addClass('P2Turn');
          PlayerOneTurn.attr({'opacity':'0'});
          PlayerTwoTurn.attr({'opacity':'1'});
          return;
        }

        P1Promote.attr({opacity:1});
        s1.removeClass('P1Turn');
        s1.addClass('P1Promo');
      }
      if(s1.hasClass('P2Turn'))
      {
        if(promoPiece.hasClass('Pawn')&&Promoy == 0)
        {
          promotePiece(promoPiece,promospace,Promox,Promoy);
          clearBoard(spaces);
          updateGridAttack(Promox,Promoy,'PlayerTwoOn');
          updateGridAttack(Lastx,Lasty);
          s1.removeClass('P2Turn');
          s1.addClass('P1Turn');
          PlayerOneTurn.attr({'opacity':'1'});
          PlayerTwoTurn.attr({'opacity':'0'});
          return;
        }
        if(promoPiece.hasClass('Knight')&&Promoy <= 1)
        {
          promotePiece(promoPiece,promospace,Promox,Promoy);
          clearBoard(spaces);
          updateGridAttack(Promox,Promoy,'PlayerTwoOn');
          updateGridAttack(Lastx,Lasty);
          s1.removeClass('P2Turn');
          s1.addClass('P1Turn');
          PlayerOneTurn.attr({'opacity':'1'});
          PlayerTwoTurn.attr({'opacity':'0'});
          return;
        }
        P2Promote.attr({opacity:1});

        s1.removeClass('P2Turn');
        s1.addClass('P2Promo');
      }
    }

    function WinState(){
      if(s1.hasClass('P1Turn'))
      {
        PlayerOneTurn.attr({opacity:0});
        PlayerOneWin.attr({opacity:1});
        s1.removeClass('P1Turn');
        s1.addClass('P1Win');
      }
      if(s1.hasClass('P2Turn'))
      {
        PlayerTwoTurn.attr({opacity:0});
        PlayerTwoWin.attr({opacity:1});
        s1.removeClass('P2Turn');
        s1.addClass('P2Win');
      }



      PlayAgain.transform("t0 0");
      PlayAgain.attr({opacity:1

      });
    }

    //walks forward from the given x and y the given extent highlighting the spaces red
    function walkForward(Ox,Oy,extent){
      if(s1.hasClass('P1Turn')){
        for(var i = 1; i<= extent && (Oy+i) <= 8; i++){
          if(spaces[Ox][Oy+i].hasClass('PlayerOneOn'))
          {
            return
          }
          if(spaces[Ox][Oy+i].hasClass('PlayerTwoOn'))
          {
              spaces[Ox][Oy+i].attr({fill : "#FF0000"});
            return
          }
          spaces[Ox][Oy+i].attr({fill : "#FF0000"});
        }
      }
      if(s1.hasClass('P2Turn')){
        for(var i = 1; i<= extent  && (Oy+i) <= 8; i++){
          if(spaces[Ox][Oy+i].hasClass('PlayerOneOn'))
          {
            spaces[Ox][Oy+i].attr({fill : "#FF0000"});
            return

          }
          if(spaces[Ox][Oy+i].hasClass('PlayerTwoOn'))
          {

            return
          }
          spaces[Ox][Oy+i].attr({fill : "#FF0000"});
        }
      }
    }

    //walks backward from the given x and y the given extent highlighting the spaces red
    function walkBackward(Ox,Oy,extent){
      if(s1.hasClass('P1Turn')){
        for(var i = 1; i<= extent && (Oy-i) >= 0; i++){
          if(spaces[Ox][Oy-i].hasClass('PlayerOneOn'))
          {
            return
          }
          if(spaces[Ox][Oy-i].hasClass('PlayerTwoOn'))
          {
              spaces[Ox][Oy-i].attr({fill : "#FF0000"});
            return
          }
          spaces[Ox][Oy-i].attr({fill : "#FF0000"});
        }
      }
      if(s1.hasClass('P2Turn')){

        for(var i = 1; i<= extent && (Oy-i) >= 0; i++){
          if(spaces[Ox][(Oy-i)].hasClass('PlayerOneOn'))
          {
            spaces[Ox][Oy-i].attr({fill : "#FF0000"});
            return

          }
          if(spaces[Ox][Oy-i].hasClass('PlayerTwoOn'))
          {

            return
          }
          spaces[Ox][Oy-i].attr({fill : "#FF0000"});
        }
      }
    }

    //walks left(toward lower x) from the given x and y the given extent highlighting the spaces red
    function walkLeft(Ox,Oy,extent){
      if(s1.hasClass('P1Turn')){
        for(var i = 1; i<= extent && (Ox-i) >= 0; i++){
          if(spaces[Ox-i][Oy].hasClass('PlayerOneOn'))
          {
            return
          }
          if(spaces[Ox-i][Oy].hasClass('PlayerTwoOn'))
          {
              spaces[Ox-i][Oy].attr({fill : "#FF0000"});
            return
          }
          spaces[Ox-i][Oy].attr({fill : "#FF0000"});
        }
      }
      if(s1.hasClass('P2Turn')){
        for(var i = 1; i<= extent && (Ox-i) >= 0; i++){
          if(spaces[Ox-i][Oy].hasClass('PlayerOneOn'))
          {
            spaces[Ox-i][Oy].attr({fill : "#FF0000"});
            return

          }
          if(spaces[Ox-i][Oy].hasClass('PlayerTwoOn'))
          {

            return
          }
          spaces[Ox-i][Oy].attr({fill : "#FF0000"});
        }
      }
    }

    //walks right(toward higher x) from the given x and y the given extent highlighting the spaces red
    function walkRight(Ox,Oy,extent){
      if(s1.hasClass('P1Turn')){
        for(var i = 1; i<= extent && (Ox+i) <= 8; i++){
          if(spaces[Ox+i][Oy].hasClass('PlayerOneOn'))
          {
            return
          }
          if(spaces[Ox+i][Oy].hasClass('PlayerTwoOn'))
          {
              spaces[Ox+i][Oy].attr({fill : "#FF0000"});
            return
          }
          spaces[Ox+i][Oy].attr({fill : "#FF0000"});
        }
      }
      if(s1.hasClass('P2Turn')){
        for(var i = 1; i<= extent && (Ox+i) <= 8; i++){
          if(spaces[Ox+i][Oy].hasClass('PlayerOneOn'))
          {
            spaces[Ox+i][Oy].attr({fill : "#FF0000"});
            return

          }
          if(spaces[Ox+i][Oy].hasClass('PlayerTwoOn'))
          {

            return
          }
          spaces[Ox+i][Oy].attr({fill : "#FF0000"});
        }
      }
    }
    //walks diagonaly down and left (toward lower x and lower y) from the given x and y the given extent highlighting the spaces red
    function walkDiagDL(Ox,Oy,extent){
      if(s1.hasClass('P1Turn')){
        for(var i = 1; i<= extent && ((Ox-i) >= 0 && (Oy-i) >= 0); i++){
          if(spaces[Ox-i][Oy-i].hasClass('PlayerOneOn'))
          {
            return
          }
          if(spaces[Ox-i][Oy-i].hasClass('PlayerTwoOn'))
          {
              spaces[Ox-i][Oy-i].attr({fill : "#FF0000"});
            return
          }
          spaces[Ox-i][Oy-i].attr({fill : "#FF0000"});
        }
      }
      if(s1.hasClass('P2Turn')){
        for(var i = 1; i<= extent && ((Ox-i) >= 0 && (Oy-i) >= 0) ; i++){
          if(spaces[Ox-i][Oy-i].hasClass('PlayerOneOn'))
          {
            spaces[Ox-i][Oy-i].attr({fill : "#FF0000"});
            return

          }
          if(spaces[Ox-i][Oy-i].hasClass('PlayerTwoOn'))
          {

            return
          }
          spaces[Ox-i][Oy-i].attr({fill : "#FF0000"});
        }
      }
    }

    //walks diagonaly down and right (toward higher x and lower y) from the given x and y the given extent highlighting the spaces red
    function walkDiagDR(Ox,Oy,extent){
      if(s1.hasClass('P1Turn')){
        for(var i = 1; i<= extent && ((Ox+i) <= 8 && (Oy-i) >= 0); i++){
          if(spaces[Ox+i][Oy-i].hasClass('PlayerOneOn'))
          {
            return
          }
          if(spaces[Ox+i][Oy-i].hasClass('PlayerTwoOn'))
          {
              spaces[Ox+i][Oy-i].attr({fill : "#FF0000"});
            return
          }
          spaces[Ox+i][Oy-i].attr({fill : "#FF0000"});
        }
      }
      if(s1.hasClass('P2Turn')){
        for(var i = 1; i<= extent && ((Ox+i) <= 8 && (Oy-i) >= 0); i++){

          if(spaces[Ox+i][Oy-i].hasClass('PlayerOneOn'))
          {
            spaces[Ox+i][Oy-i].attr({fill : "#FF0000"});
            return

          }
          if(spaces[Ox+i][Oy-i].hasClass('PlayerTwoOn'))
          {

            return
          }
          spaces[Ox+i][Oy-i].attr({fill : "#FF0000"});
        }
      }
    }


    //walks diagonaly forward and left (toward lower x and higher y) from the given x and y the given extent highlighting the spaces red
    function walkDiagFL(Ox,Oy,extent){
      if(s1.hasClass('P1Turn')){
        for(var i = 1; i<= extent && ((Ox-i) >= 0 && (Oy+i) <= 8); i++){
          if(spaces[Ox-i][Oy+i].hasClass('PlayerOneOn'))
          {
            return
          }
          if(spaces[Ox-i][Oy+i].hasClass('PlayerTwoOn'))
          {
              spaces[Ox-i][Oy+i].attr({fill : "#FF0000"});
            return
          }
          spaces[Ox-i][Oy+i].attr({fill : "#FF0000"});
        }
      }
      if(s1.hasClass('P2Turn')){
        for(var i = 1; i<= extent && ((Ox-i) >= 0 && (Oy+i) <= 8) ; i++){
          if(spaces[Ox-i][Oy+i].hasClass('PlayerOneOn'))
          {
            spaces[Ox-i][Oy+i].attr({fill : "#FF0000"});
            return

          }
          if(spaces[Ox-i][Oy+i].hasClass('PlayerTwoOn'))
          {

            return
          }
          spaces[Ox-i][Oy+i].attr({fill : "#FF0000"});
        }
      }
    }

    //walks diagonaly forward and right (toward higher x and higher y) from the given x and y the given extent highlighting the spaces red
    function walkDiagFR(Ox,Oy,extent){
      if(s1.hasClass('P1Turn')){
        for(var i = 1; i<= extent && ((Ox+i) <= 8 && (Oy+i) <= 8); i++){
          if(spaces[Ox+i][Oy+i].hasClass('PlayerOneOn'))
          {
            return
          }
          if(spaces[Ox+i][Oy+i].hasClass('PlayerTwoOn'))
          {
              spaces[Ox+i][Oy+i].attr({fill : "#FF0000"});
            return
          }
          spaces[Ox+i][Oy+i].attr({fill : "#FF0000"});
        }
      }
      if(s1.hasClass('P2Turn')){
        for(var i = 1; i<= extent && ((Ox+i) <= 8 && (Oy+i) <= 8); i++){
          if(spaces[Ox+i][Oy+i].hasClass('PlayerOneOn'))
          {
              spaces[Ox+i][Oy+i].attr({fill : "#FF0000"});
            return

          }
          if(spaces[Ox+i][Oy+i].hasClass('PlayerTwoOn'))
          {

            return
          }
          spaces[Ox+i][Oy+i].attr({fill : "#FF0000"});
        }
      }
    }
    //walks the possible knight movement from a given x and y starting cordinate
    function knightWalk(Ox,Oy)
    {

      if(s1.hasClass('P1Turn')){
          if(Ox+1 <= 8 && Oy+2 <=8){
            if(spaces[Ox+1][Oy+2].hasClass('PlayerOneOn'))
            {

            }
            if(spaces[Ox+1][Oy+2].hasClass('PlayerTwoOn'))
            {
                spaces[Ox+1][Oy+2].attr({fill : "#FF0000"});

            }
            else
            {
              spaces[Ox+1][Oy+2].attr({fill : "#FF0000"});
            }

          }
          if(Ox-1 >= 0 && Oy+2 <=8){
            if(spaces[Ox-1][Oy+2].hasClass('PlayerOneOn'))
            {

            }
            else if(spaces[Ox-1][Oy+2].hasClass('PlayerTwoOn'))
            {
                spaces[Ox-1][Oy+2].attr({fill : "#FF0000"});

            }
            else
            {
                spaces[Ox-1][Oy+2].attr({fill : "#FF0000"});
            }

        }

      }
      if(s1.hasClass('P2Turn')){
        if(Ox+1 <= 8 && Oy-2 >= 0){
          if(spaces[Ox+1][Oy-2].hasClass('PlayerOneOn'))
          {
              spaces[Ox+1][Oy-2].attr({fill : "#FF0000"});
          }
          else if(spaces[Ox+1][Oy-2].hasClass('PlayerTwoOn'))
          {


          }
          else
          {
            spaces[Ox+1][Oy-2].attr({fill : "#FF0000"});
          }

        }
        if(Ox-1 >= 0 && Oy-2 >= 0){
          if(spaces[Ox-1][Oy-2].hasClass('PlayerOneOn'))
          {
              spaces[Ox-1][Oy-2].attr({fill : "#FF0000"});
          }
          else if(spaces[Ox-1][Oy-2].hasClass('PlayerTwoOn'))
          {


          }
          else
          {
              spaces[Ox-1][Oy-2].attr({fill : "#FF0000"});
          }

      }
      }
    }



    //highlights all legal capture piece placements on the board
    function highlightPlacement(piece){

        for(var x = 0; x <= 8; x++){
          for(var y = 0; y <= 8 ; y++){
          if(!(spaces[x][y].hasClass('PlayerOneOn')||spaces[x][y].hasClass('PlayerTwoOn')))
          {
            spaces[x][y].attr({fill : "#FF0000"});
          }
        }
      }
        if(piece.hasClass('Pawn'))
        {
          var x,
              pawnOccupied = getPawnxs();
          console.log(pawnOccupied);
          if(s1.hasClass('P1Turn')){
             for(var x = 0 ;x <= 8 ;x ++){
               spaces[x][8].attr({fill : "#ffffff"});
             }
             for(var i = 0; i < pawnOccupied.length; i++)
             {
               console.log(pawnOccupied.length);
                x = pawnOccupied[i];
               for(var y = 0 ;y <= 8 ; y++){
                 spaces[x][y].attr({fill : "#ffffff"});
               }
             }
          }
          if(s1.hasClass('P2Turn')){
             for(var x = 0 ;x <= 8 ;x ++){
               spaces[x][0].attr({fill : "#ffffff"});
             }
             {
               for(var i = 0; i < pawnOccupied.length; i++){
                  x = pawnOccupied[i];
                 for(var y = 0 ;y <= 8 ; y++){
                   spaces[x][y].attr({fill : "#ffffff"});
                 }
              }
             }
           }
        }
        if(piece.hasClass('Knight'))
        {
          if(s1.hasClass('P1Turn')){
             for(var x = 0 ;x <=8 ;x ++){
               spaces[x][8].attr({fill : "#000000"});
               spaces[x][7].attr({fill : "#000000"});
             }
             f
          }
          if(s1.hasClass('P2Turn')){
             for(var x = 0 ;x <=8 ;x ++){
               spaces[x][0].attr({fill : "#000000"});
               spaces[x][1].attr({fill : "#000000"});
             }

          }
        }
        if(piece.hasClass('Lance'))
        {
          if(s1.hasClass('P1Turn')){
             for(var x = 0 ;x <=8 ;x ++){
               spaces[x][8].attr({fill : "#000000"});

             }
             f
          }
          if(s1.hasClass('P2Turn')){
             for(var x = 0 ;x <=8 ;x ++){
               spaces[x][0].attr({fill : "#000000"});

             }

          }
        }

    }

    function getPawnxs(){
      var xs = [],
          count = 0;
      if(s1.hasClass('P1Turn')){
         for(var i = 1  ;i <= 9 ; i++){
           if(!P1Pieces[i].hasClass('P2CapturedPiece'))
           {
             for(var y = 0; y <= 8; y ++)
             {
               if(P1Pieces[i].hasClass('location'+(i-1)+y)){
                 xs[count] = (i-1);
                 count++
               }
             }

           }
           if(P2Pieces[i].hasClass('P1CapturedPiece'))
           {
             for(var y = 0; y <= 8; y++)
             {
               if(P2Pieces[i].hasClass('location'+(i-1)+y)){
                 xs[count] = (i-1);
                 count++
                }
             }
           }
         }
      }
      if(s1.hasClass('P2Turn')){
        for(var i = 1  ;i <= 9 ; i++){
          if(!P2Pieces[i].hasClass('P1CapturedPiece'))
          {
            for(var y = 0; y <= 8; y++)
            {
              if(P2Pieces[i].hasClass('location'+(i-1)+y)){
                xs[count] = (i-1);
                count++
              }
            }

          }
          if(P1Pieces[i].hasClass('P2CapturedPiece'))
          {
            for(var y = 0; y <= 8; y++)
            {
              if(P1Pieces[i].hasClass('location'+(i-1)+y)){
                xs[count] = (i-1);
                count++
              }
            }
          }
        }
      }
      return xs;
    }
    // move function used for drag handles on all of the pieces uses mouse input to transform the pieces
    var move = function(dx,dy,x,y) {
      console.log("In Move");
      if((s1.hasClass('P1Turn')&&this.hasClass('P1Pieces'))||(s1.hasClass('P2Turn')&&this.hasClass('P2Pieces')) &&(this.attr('opacity')== 1))
      {
            this.attr({
                        transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx*1.3, dy*1.3]
                    });
          }
    }

    // move functions used for drag handlers on all pieces highlights the possible moves for piece that has a drag event started on it
    var start = function() {
      console.log("In Start");
      if(this.attr('opacity') == 1){
        this.data('origTransform', this.transform().local );
        if(s1.hasClass('P1Turn')&&this.hasClass('P1Pieces'))
          {
                var BBox = this.getBBox(),
                    pieceName = this.node.id.substring(0,2);
                    console.log(this.data('origTransform'));
                    if(this.hasClass('ReadyForCapPlacement')){
                        highlightPlacement(this);
                    }
                    else {
                      if(pieceName == "Pa")
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                  walkForward(x,y,1)
                                  Lastx = x;
                                  Lasty = y;
                                }
                              }
                            }
                          }

                      }
                      if(pieceName == "Kg")
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                  walkForward(x,y,1);
                                  walkBackward(x,y,1);
                                  walkLeft(x,y,1);
                                  walkRight(x,y,1);
                                  walkDiagDL(x,y,1);
                                  walkDiagFL(x,y,1);
                                  walkDiagDR(x,y,1);
                                  walkDiagFR(x,y,1);
                                  Lastx = x;
                                  Lasty = y;
                                }
                              }
                            }
                          }
                      }
                      if(pieceName == "Ro")
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                    console.log(x+","+y)
                                    walkForward(x,y,9);
                                    walkBackward(x,y,9);
                                    walkLeft(x,y,9);
                                    walkRight(x,y,9);
                                    Lastx = x;
                                    Lasty = y;
                                }
                              }
                            }
                          }
                      }
                      if(pieceName == "Bi")
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                    walkDiagDL(x,y,9);
                                    walkDiagFL(x,y,9);
                                    walkDiagDR(x,y,9);
                                    walkDiagFR(x,y,9);
                                    Lastx = x;
                                    Lasty = y;
                              }
                            }
                          }
                        }
                      }
                      if(pieceName == "Go" || pieceName == "PP" || pieceName == "LP" || pieceName == "KP" || pieceName == "SP"  )
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                  walkForward(x,y,1);
                                  walkBackward(x,y,1);
                                  walkLeft(x,y,1);
                                  walkRight(x,y,1);
                                  walkDiagFL(x,y,1);
                                  walkDiagFR(x,y,1);
                                  Lastx = x;
                                  Lasty = y;
                                }
                              }
                            }
                          }
                      }
                      if(pieceName == "Si")
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                  walkForward(x,y,1);
                                  walkDiagFL(x,y,1);
                                  walkDiagFR(x,y,1);
                                  walkDiagDR(x,y,1);
                                  walkDiagDL(x,y,1);
                                  Lastx = x;
                                  Lasty = y;
                                }
                              }
                            }
                          }
                      }
                      if(pieceName == "La")
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                   walkForward(x,y,9);
                                   Lastx = x;
                                   Lasty = y;
                                }
                              }
                            }
                          }
                      }
                      if(pieceName == "Kn")
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                   knightWalk(x,y);
                                   Lastx = x;
                                   Lasty = y;
                                }
                              }
                            }
                          }
                      }
                      if(pieceName == "RP")
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                  walkDiagFL(x,y,1);
                                  walkDiagFR(x,y,1);
                                  walkDiagDR(x,y,1);
                                  walkDiagDL(x,y,1);
                                  walkForward(x,y,9);
                                  walkBackward(x,y,9);
                                  walkLeft(x,y,9);
                                  walkRight(x,y,9);
                                   Lastx = x;
                                   Lasty = y;
                                }
                              }
                            }
                          }
                        }
                      if(pieceName == "BP")
                      {
                        for(var x = 0; x < 9; x ++){
                            for(var y = 0; y < 9; y ++){
                              if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                  walkForward(x,y,1);
                                  walkBackward(x,y,1);
                                  walkLeft(x,y,1);
                                  walkRight(x,y,1);
                                  walkDiagDL(x,y,9);
                                  walkDiagFL(x,y,9);
                                  walkDiagDR(x,y,9);
                                  walkDiagFR(x,y,9);
                                   Lastx = x;
                                   Lasty = y;
                                }
                              }
                            }
                          }
                        }
                    }
                    }
                     if(s1.hasClass('P2Turn')&&this.hasClass('P2Pieces'))
                    {


                      console.log(this.data('origTransform'));
                      var BBox = this.getBBox(),
                          pieceName = this.node.id.substring(0,2);
                          console.log(this.data('origTransform'));
                          if(this.hasClass('ReadyForCapPlacement')){

                              highlightPlacement(this);


                          }
                          else {
                            if(pieceName == "Pa")
                            {


                              for(var x = 0; x < 9; x ++){
                                  for(var y = 0; y < 9; y ++){

                                    if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                      if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){

                                        walkBackward(x,y,1);

                                        Lastx = x;
                                        Lasty = y;

                                      }
                                    }
                                  }
                                }

                            }
                            if(pieceName == "Kg")
                            {

                              for(var x = 0; x < 9; x ++){
                                  for(var y = 0; y < 9; y ++){

                                    if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                      if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                        walkForward(x,y,1);
                                        walkBackward(x,y,1);
                                        walkLeft(x,y,1);
                                        walkRight(x,y,1);
                                        walkDiagDL(x,y,1);
                                        walkDiagFL(x,y,1);
                                        walkDiagDR(x,y,1);
                                        walkDiagFR(x,y,1);
                                        Lastx = x;
                                        Lasty = y;

                                      }
                                    }
                                  }
                                }
                            }
                            if(pieceName == "Ro")
                            {

                              for(var x = 0; x < 9; x ++){
                                  for(var y = 0; y < 9; y ++){
                                    if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                      if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                          console.log(x+","+y)

                                          walkForward(x,y,9);
                                          walkBackward(x,y,9);
                                          walkLeft(x,y,9);
                                          walkRight(x,y,9);
                                          Lastx = x;
                                          Lasty = y;
                                      }
                                    }
                                  }
                                }
                            }
                            if(pieceName == "Bi")
                            {
                              for(var x = 0; x < 9; x ++){
                                  for(var y = 0; y < 9; y ++){
                                    if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                      if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                          walkDiagDL(x,y,9);
                                          walkDiagFL(x,y,9);
                                          walkDiagDR(x,y,9);
                                          walkDiagFR(x,y,9);
                                          Lastx = x;
                                          Lasty = y;
                                    }
                                  }
                                }
                              }
                            }
                            if(pieceName == "Go" || pieceName == "PP" || pieceName == "LP" || pieceName == "KP" || pieceName == "SP")
                            {
                              for(var x = 0; x < 9; x ++){
                                  for(var y = 0; y < 9; y ++){
                                    if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                      if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                        walkForward(x,y,1);
                                        walkBackward(x,y,1);
                                        walkLeft(x,y,1);
                                        walkRight(x,y,1);
                                        walkDiagDL(x,y,1);
                                        walkDiagDR(x,y,1);
                                        Lastx = x;
                                        Lasty = y;
                                      }
                                    }
                                  }
                                }

                            }
                            if(pieceName == "Si")
                            {
                              for(var x = 0; x < 9; x ++){
                                  for(var y = 0; y < 9; y ++){
                                    if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                      if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){

                                        walkBackward(x,y,1);
                                        walkDiagFL(x,y,1);
                                        walkDiagFR(x,y,1);
                                        walkDiagDR(x,y,1);
                                        walkDiagDL(x,y,1);
                                        Lastx = x;
                                        Lasty = y;
                                      }
                                    }
                                  }
                                }
                            }
                            if(pieceName == "La")
                            {
                              for(var x = 0; x < 9; x ++){
                                  for(var y = 0; y < 9; y ++){

                                    if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                      if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){

                                        walkBackward(x,y,9);

                                        Lastx = x;
                                        Lasty = y;

                                      }
                                    }
                                  }
                                }

                            }
                            if(pieceName == "Kn")
                            {
                              for(var x = 0; x < 9; x ++){
                                  for(var y = 0; y < 9; y ++){
                                    if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                      if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                         knightWalk(x,y);
                                         Lastx = x;
                                         Lasty = y;
                                      }
                                    }
                                  }
                                }
                              }
                              if(pieceName == "RP")
                              {
                                for(var x = 0; x < 9; x ++){
                                    for(var y = 0; y < 9; y ++){
                                      if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                        if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                          walkDiagFL(x,y,1);
                                          walkDiagFR(x,y,1);
                                          walkDiagDR(x,y,1);
                                          walkDiagDL(x,y,1);
                                          walkForward(x,y,9);
                                          walkBackward(x,y,9);
                                          walkLeft(x,y,9);
                                          walkRight(x,y,9);
                                           Lastx = x;
                                           Lasty = y;
                                        }
                                      }
                                    }
                                  }
                                }
                                if(pieceName == "BP")
                                {
                                  for(var x = 0; x < 9; x ++){
                                      for(var y = 0; y < 9; y ++){
                                        if((Math.abs(spaces[x][y].node.cx.baseVal.value-BBox.cx))<25){
                                          if((Math.abs(spaces[x][y].node.cy.baseVal.value-BBox.cy))<25){
                                            walkForward(x,y,1);
                                            walkBackward(x,y,1);
                                            walkLeft(x,y,1);
                                            walkRight(x,y,1);
                                            walkDiagDL(x,y,9);
                                            walkDiagFL(x,y,9);
                                            walkDiagDR(x,y,9);
                                            walkDiagFR(x,y,9);
                                             Lastx = x;
                                             Lasty = y;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }


      //Stop Functions For vatious pieces.
      var stop = function() {
        //values to fine tune snapping
        var THRESHOLD = 25;
        var offsetx,
            offsety,
            s  = Snap("#svg2"),
            BBox = this.getBBox(),
            pieceName = this.node.id.substring(0,2);

            console.log(this);
      //Player 1 State

      if(this.attr('opacity') == 1){
      if(s1.hasClass('P1Turn')&&this.hasClass('P1Pieces')){
        for(var x = 0; x < 9; x ++){
            for(var y = 0; y < 9; y ++){

              if((Math.abs((spaces[x][y].node.cx.baseVal.value)-BBox.cx))<THRESHOLD){
                if((Math.abs((spaces[x][y].node.cy.baseVal.value)-BBox.cy))<THRESHOLD){

                  if(spaces[x][y].attr('fill') == "rgb(255, 0, 0)"){
                    if(this.hasClass('ReadyForCapPlacement')){
                      if(this.hasClass('P1CapturedPiece')){
                        transMatrix = this.matrix;
                        transMatrix.translate((spaces[x][y].node.cx.baseVal.value-BBox.cx),((spaces[x][y].node.cy.baseVal.value-BBox.cy)*-1));
                        this.attr({
                          transform: transMatrix}
                        );
                      }
                      else{
                        transMatrix = this.matrix;
                        transMatrix.translate((spaces[x][y].node.cx.baseVal.value-BBox.cx),(spaces[x][y].node.cy.baseVal.value-BBox.cy));
                        this.attr({
                          transform: transMatrix }
                        );
                      }

                      P1CapArea[this.data('CapLocator')].removeClass('Occupied');
                      this.removeData('CapLocator');
                      updateP1CapCount();
                      this.removeClass('location'+Lastx+Lasty);
                      this.addClass('location'+x+y);
                      this.removeClass('ReadyForCapPlacement');
                      placingPieceDown.play();
                    }
                    else{
                      if(this.hasClass('P1CapturedPiece')){
                        transMatrix = this.matrix;
                        transMatrix.translate((spaces[x][y].node.cx.baseVal.value-BBox.cx),((spaces[x][y].node.cy.baseVal.value-BBox.cy)*-1));
                        this.attr({
                          transform: transMatrix}
                        );
                      }
                      else{
                        transMatrix = this.matrix;
                        transMatrix.translate((spaces[x][y].node.cx.baseVal.value-BBox.cx),(spaces[x][y].node.cy.baseVal.value-BBox.cy));
                        this.attr({
                          transform: transMatrix}
                        );
                      }

                      placingPieceDown.play();

                      if(spaces[x][y].hasClass('PlayerTwoOn'))
                      {
                        //check for which piece is currently occupying theis space from player2 and capturing said piece
                        for(var i = 1; i<= 37; i++){
                          if(P2Pieces[i].hasClass('location'+x+y)){

                            BBox = P2Pieces[i].getBBox();
                            BBox2 = spaces[x][y].getBBox();
                            transMatrix = P2Pieces[i].matrix;
                            transMatrix.translate((P1CapArea[P1CapCount].node.cx.baseVal.value - BBox.cx),(P1CapArea[P1CapCount].node.cy.baseVal.value - BBox.cy));
                            console.log(P2Pieces[i].data('originalLocationX')+"and"+P2Pieces[i].data('originalLocationY'))
                            transMatrix.scale('1','-1', P2Pieces[i].data('originalLocationX'), P2Pieces[i].data('originalLocationY'));
                            P2Pieces[i].animate({
                              transform: transMatrix},750,mina.bounce
                            );
                            P1CapArea[P1CapCount].addClass('Occupied');
                            P2Pieces[i].data('CapLocator',P1CapCount);
                            P2Pieces[i].removeClass('P2Pieces');
                            P2Pieces[i].addClass('P1Pieces');
                            P2Pieces[i].addClass('P1CapturedPiece');
                            P2Pieces[i].addClass('ReadyForCapPlacement');
                            P2Pieces[i].removeClass('location'+x+y);
                            updateP1CapCount();
                            if(P2Pieces[i].hasClass('King'))
                            {
                              WinState();
                              return;
                            }
                            i = 38;
                          }
                        }
                        ///check for which piece is currently occupying theis space from player1 and recapturing said piece
                        for(var i = 1; i<= 37; i++){
                          if(P1Pieces[i].hasClass('location'+x+y)){
                            BBox = P1Pieces[i].getBBox();

                            transMatrix = P1Pieces[i].matrix;

                            transMatrix.scale('1','-1', P1Pieces[i].data('originalLocationX'), P1Pieces[i].data('originalLocationY'));
                            transMatrix.translate((P1CapArea[P1CapCount].node.cx.baseVal.value - BBox.cx),(P1CapArea[P1CapCount].node.cy.baseVal.value - BBox.cy));
                            console.log(P1Pieces[i].data('originalLocationX')+" and "+P1Pieces[i].data('originalLocationY'))
                            P1Pieces[i].animate({
                              transform: transMatrix},750,mina.bounce
                            );
                            P1CapArea[P1CapCount].addClass('Occupied')
                            P1Pieces[i].data('CapLocator',P1CapCount)
                            P1Pieces[i].removeClass('P2Pieces');
                            P1Pieces[i].addClass('P1Pieces');
                            P1Pieces[i].removeClass('P2CapturedPiece')
                            P1Pieces[i].addClass('ReadyForCapPlacement');
                            P1Pieces[i].removeClass('location'+x+y);
                            updateP1CapCount();
                            i = 38;
                          }
                        }
                      }
                      if(spaces[x][y].hasClass('Player1PZone')){
                        if(this.hasClass('canPromote'))
                        {
                          promoPiece = this;
                          promospace = spaces[x][y];
                          Promox = x;
                          Promoy = y;
                          Promostate();

                          return
                          promotion.play();
                        }
                        else
                        {
                          this.removeClass('location'+Lastx+Lasty);
                          this.addClass('location'+x+y);
                        }
                      }
                      else
                      {
                        this.removeClass('location'+Lastx+Lasty);
                        this.addClass('location'+x+y);
                      }


                    }

                    //put me other places


                    clearBoard(spaces);
                    updateGridAttack(x,y,'PlayerOneOn');
                    updateGridAttack(Lastx,Lasty);
                    s1.removeClass('P1Turn');
                    s1.addClass('P2Turn');
                    console.log("Has PlayerOne on :" + spaces[x][y].hasClass('PlayerOneOn'));
                    PlayerOneTurn.attr({'opacity':'0'});
                    PlayerTwoTurn.attr({'opacity':'1'});
                    console.log(this.hasClass('P1Pieces'));
                    return;

                  }
                }
              }
            }
        }
          this.animate({
            transform: this.data('origTransform')}, 750, mina.bounce
          );
          //placingPieceDown.play();
          clearBoard(spaces);
           console.log('finished dragging');
      }
      //Player 2 State
      if(s1.hasClass('P2Turn')&&this.hasClass('P2Pieces')){

        for(var x = 0; x < 9; x ++){
            for(var y = 0; y < 9; y ++){

              if((Math.abs((spaces[x][y].node.cx.baseVal.value)-BBox.cx))<THRESHOLD){
                if((Math.abs((spaces[x][y].node.cy.baseVal.value)-BBox.cy))<THRESHOLD){

                  if(spaces[x][y].attr('fill') == "rgb(255, 0, 0)"){
                    if(this.hasClass('ReadyForCapPlacement')){
                      if(this.hasClass('P2CapturedPiece')){
                        transMatrix = this.matrix;
                        transMatrix.translate((spaces[x][y].node.cx.baseVal.value-BBox.cx),((spaces[x][y].node.cy.baseVal.value-BBox.cy)*-1));

                        this.attr({
                          transform: transMatrix }
                        );
                      }
                      else{
                        transMatrix = this.matrix;
                        transMatrix.translate((spaces[x][y].node.cx.baseVal.value-BBox.cx),(spaces[x][y].node.cy.baseVal.value-BBox.cy));
                        this.attr({
                          transform: transMatrix }
                        );
                      }
                      P2CapArea[this.data('CapLocator')].removeClass('Occupied');
                      this.removeData('CapLocator');
                      updateP2CapCount();
                      this.removeClass('location'+Lastx+Lasty);
                      this.addClass('location'+x+y);
                      this.removeClass('ReadyForCapPlacement');
                      placingPieceDown.play();

                    }
                    else{
                      if(this.hasClass('P2CapturedPiece')){
                        transMatrix = this.matrix;
                        transMatrix.translate((spaces[x][y].node.cx.baseVal.value-BBox.cx),((spaces[x][y].node.cy.baseVal.value-BBox.cy)*-1));

                        this.attr({
                          transform: transMatrix }
                        );
                      }
                      else{
                        transMatrix = this.matrix;
                        transMatrix.translate((spaces[x][y].node.cx.baseVal.value-BBox.cx),(spaces[x][y].node.cy.baseVal.value-BBox.cy));

                        this.attr({
                          transform: transMatrix }
                        );
                      }
                      placingPieceDown.play();
                      if(spaces[x][y].hasClass('PlayerOneOn'))
                      {

                        console.log("In Player 2 Piece cap")
                        console.log(x +'for x and '+ y+' for y player two cap.')
                        for(var i = 1; i<=37; i++){
                            if(P1Pieces[i].hasClass('location'+x+y)){

                            BBox = P1Pieces[i].getBBox();


                              console.log(P1Pieces[i]);
                              transMatrix = P1Pieces[i].matrix;
                              transMatrix.translate((P2CapArea[P2CapCount].node.cx.baseVal.value - BBox.cx),(P2CapArea[P2CapCount].node.cy.baseVal.value - BBox.cy));

                              transMatrix.scale('1','-1', P1Pieces[i].data('originalLocationX'), P1Pieces[i].data('originalLocationY'));
                              P1Pieces[i].animate({
                                transform: transMatrix },850,mina.bounce
                              );

                              P2CapArea[P2CapCount].addClass('Occupied');
                              P1Pieces[i].data('CapLocator',P2CapCount);
                              P1Pieces[i].removeClass('P1Pieces');
                              P1Pieces[i].addClass('P2Pieces');

                              P1Pieces[i].addClass('P2CapturedPiece');
                              P1Pieces[i].addClass('ReadyForCapPlacement');

                              P1Pieces[i].removeClass('location'+x+y);

                              updateP2CapCount();
                              if(P1Pieces[i].hasClass('King'))
                              {
                                WinState();
                                return;
                              }
                              debug = i;
                              i = 38;


                            }
                          }
                          for(var i = 1; i<= 37 ; i++){
                            if(P2Pieces[i].hasClass('location'+x+y)){
                              BBox = P2Pieces[i].getBBox();
                              BBox2 = spaces[x][y].getBBox();
                              transMatrix = P2Pieces[i].matrix;

                              transMatrix.scale('1','-1', P2Pieces[i].data('originalLocationX'), P2Pieces[i].data('originalLocationY'));
                              transMatrix.translate((P2CapArea[P2CapCount].node.cx.baseVal.value - BBox.cx),(P2CapArea[P2CapCount].node.cy.baseVal.value - BBox.cy));
                              console.log(P2Pieces[i].data('originalLocationX')+" and "+P2Pieces[i].data('originalLocationY'))
                              P2Pieces[i].animate({
                                transform: transMatrix},750,mina.bounce
                              );
                              P2CapArea[P2CapCount].addClass('Occupied');
                              P2Pieces[i].data('CapLocator',P2CapCount);
                              P2Pieces[i].removeClass('P1Pieces');
                              P2Pieces[i].addClass('P2Pieces');
                              P2Pieces[i].removeClass('P1CapturedPiece')
                              P2Pieces[i].addClass('ReadyForCapPlacement');
                              P2Pieces[i].removeClass('location'+x+y);
                              updateP2CapCount();
                              i = 38;
                            }
                          }

                        }
                        if(spaces[x][y].hasClass('Player2PZone')){
                          if(this.hasClass('canPromote'))
                          {
                            promoPiece = this;
                            promospace = spaces[x][y];
                            Promox = x;
                            Promoy = y;
                            Promostate();

                            return
                            promotion.play();

                          }
                          else
                          {
                            this.removeClass('location'+Lastx+Lasty);
                            this.addClass('location'+x+y);
                          }
                        }
                        else
                        {
                          this.removeClass('location'+Lastx+Lasty);
                          this.addClass('location'+x+y);
                        }
                      }
                    clearBoard(spaces);
                    updateGridAttack(x,y,'PlayerTwoOn');
                    updateGridAttack(Lastx,Lasty);
                    console.log("Has PlayerTwo on :" + spaces[x][y].hasClass('PlayerTwoOn'));
                    s1.removeClass('P2Turn');
                    s1.addClass('P1Turn');
                    PlayerOneTurn.attr({'opacity':'1'});
                    PlayerTwoTurn.attr({'opacity':'0'});
                  //  ChangeTurn.play();

                    return;
                  }
                  }
                }
              }
            }

            this.animate({
              transform: this.data('origTransform')}, 750, mina.bounce
            );
            clearBoard(spaces);
             console.log('finished dragging');
        }

      }
    }



      function displayinfo(){


          if(s1.hasClass('tutorial')&& (this.attr('opacity') == 1)){
            for(var i = 0 ; i <=13 ; i++){
              InfoBoxes[i].attr({opacity : 0});
            }

            if(this.hasClass('Lance'))
            {
              InfoBoxes[0] .attr({opacity : 1});
              return;


            }
            if(this.hasClass('LanceP'))
            {
              InfoBoxes[1] .attr({opacity : 1});

              return;

            }

            if(this.hasClass('Pawn'))
            {
              InfoBoxes[2] .attr({opacity : 1});

              return;

            }

            if(this.hasClass('PawnP'))
            {
              InfoBoxes[3] .attr({opacity : 1});
              return;

            }

            if(this.hasClass('SilverGeneral'))
            {
              InfoBoxes[4] .attr({opacity : 1});
              return;

            }
            if(this.hasClass('SilverGeneralP'))
            {
              InfoBoxes[5] .attr({opacity : 1});
              return;

            }
            if(this.hasClass('GoldGeneral'))
            {
              InfoBoxes[6] .attr({opacity : 1});
              return;
            }
            if(this.hasClass('Rook'))
            {
              InfoBoxes[7] .attr({opacity : 1});
              return;
            }
            if(this.hasClass('RookP'))
            {
              InfoBoxes[8] .attr({opacity : 1});
              return;
            }
            if(this.hasClass('BishopP'))
            {
              InfoBoxes[9] .attr({opacity : 1});
              return;
            }
            if(this.hasClass('Bishop'))
            {
              InfoBoxes[10] .attr({opacity : 1});
              return;
            }
            if(this.hasClass('Knight'))
            {
              InfoBoxes[11] .attr({opacity : 1});
              return;
            }
            if(this.hasClass('KnightP'))
            {
              InfoBoxes[12] .attr({opacity : 1});
              return;
            }
            if(this.hasClass('King'))
            {
              InfoBoxes[13] .attr({opacity : 1});
              return;
            }


          }
      }

      function YesClick(){

        if(s1.hasClass('P1Promo')){
          console.log("InPromotedPieces")
          s1.removeClass('P1Promo');
          s1.addClass('P1Turn');
          promotePiece(promoPiece,promospace,Promox,Promoy);
          P1Promote.attr({opacity:0})
          clearBoard(spaces);
          updateGridAttack(Promox,Promoy,'PlayerOneOn');
          updateGridAttack(Lastx,Lasty);
          s1.removeClass('P1Turn');
          s1.addClass('P2Turn');
          PlayerOneTurn.attr({'opacity':'0'});
          PlayerTwoTurn.attr({'opacity':'1'});
        }
        if(s1.hasClass('P2Promo')){
          s1.removeClass('P2Promo');
          s1.addClass('P2Turn');
          promotePiece(promoPiece,promospace,Promox,Promoy);
          P2Promote.attr({opacity:0})
          clearBoard(spaces);
          updateGridAttack(Promox,Promoy,'PlayerTwoOn');
          updateGridAttack(Lastx,Lasty);
          s1.removeClass('P2Turn');
          s1.addClass('P1Turn');
          PlayerOneTurn.attr({'opacity':'1'});
          PlayerTwoTurn.attr({'opacity':'0'});
        }

      }

      function NoClick(){
        if(s1.hasClass('P1Promo')){
          console.log("InPromotedPieces")
          promoPiece.removeClass('location'+Lastx+Lasty);
          promoPiece.addClass('location'+Promox+Promoy);
          s1.removeClass('P1Promo');
          s1.addClass('P1Turn');
          P1Promote.attr({opacity:0})
          clearBoard(spaces);
          updateGridAttack(Promox,Promoy,'PlayerOneOn');
          updateGridAttack(Lastx,Lasty);
          s1.removeClass('P1Turn');
          s1.addClass('P2Turn');
          PlayerOneTurn.attr({'opacity':'0'});
          PlayerTwoTurn.attr({'opacity':'1'});
        }
        if(s1.hasClass('P2Promo')){
          promoPiece.removeClass('location'+Lastx+Lasty);
          promoPiece.addClass('location'+Promox+Promoy);
          s1.removeClass('P2Promo');
          s1.addClass('P2Turn');
          P2Promote.attr({opacity:0})
          clearBoard(spaces);
          updateGridAttack(Promox,Promoy,'PlayerTwoOn');
          updateGridAttack(Lastx,Lasty);
          s1.removeClass('P2Turn');
          s1.addClass('P1Turn');
          PlayerOneTurn.attr({'opacity':'1'});
          PlayerTwoTurn.attr({'opacity':'0'});
        }

      }






      function toggleTutorial()
      {
        if(s1.hasClass('tutorial'))
        {
          s1.removeClass('tutorial')
          this.attr({fill : '#B3B3B3'});
          for(var i = 0 ; i <=13 ; i++){
            InfoBoxes[i].attr({opacity : 0});

          }
        }
        else
        {
            s1.addClass('tutorial')
            this.attr({fill : "#FF0000"});
        }
      }
      //event listeners for movement
      for(var i = 1; i<=37 ;i++ ){
        P1Pieces[i].drag(move, start, stop);
        P2Pieces[i].drag(move, start, stop);
      }

      //event listeners for hover
      for(var i = 1; i<=37;i++ ){
       P1Pieces[i].mouseover(displayinfo);
       P2Pieces[i].mouseover(displayinfo);
      }

      //event listeners for InfoToggle
      InfoToggle.click(toggleTutorial)
      //event listener for Platgain
      PlayAgain.click(function(){
        if(PlayAgain.attr('opacity') == 1)
        {
          $.ajax({
              type: "GET",
              url: "Shogi",
              success: function(){
                  location.reload();
              }
           });
        }
      });
      P2PYes.click(YesClick)
      P2PNo.click(NoClick)
      P1PYes.click(YesClick)
      P1PNo.click(NoClick)
    });
  }
