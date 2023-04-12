function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LmVc9yNx2d":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email=player.GetVar('EmailAddress');
var cc='distancelearning@nationalww2museum.org';
var subject='My Short Answer Responses';
var body_start=player.GetVar('TextEntry13');
var school=player.GetVar('TextEntry14');
var teacher=player.GetVar('TextEntry15');
var mcscore=player.GetVar('Quiz1.ScorePercent');
var tennessee=player.GetVar('TextEntry2');
var texas=player.GetVar('TextEntry3');
var wyoming=player.GetVar('TextEntry4');
var colorado=player.GetVar('TextEntry5');
var northdakota=player.GetVar('TextEntry6');
var oregon=player.GetVar ('TextEntry7');
var michigan=player.GetVar ('TextEntry8');
var florida=player.GetVar ('TextEntry9');
var arizona=player.GetVar('TextEntry10');
var northcarolina=player.GetVar('TextEntry11');
var concludingquestionone=player.GetVar('TextEntry');
var concludingquestiontwo=player.GetVar('TextEntry1');
var mailto_link='mailto:'+email+'?cc='+cc+'&subject='+subject+'&body='+'My Name:%0d%0A'+body_start+'%0d%0A%0d%0AMy School:%0d%0A'+school+'%0d%0A%0d%0AMy Teacher:%0d%0A'+teacher+'%0d%0A%0d%0AMultiple Choice Score:%0d%0A'+mcscore+'%0d%0A%0d%0ATennessee Challenges and Strategies:%0d%0A'+tennessee+'%0d%0A%0d%0ATexas Challenges and Strategies:%0d%0A'+texas+'%0d%0A%0d%0AWyoming Challenges and Strategies:%0d%0A'+wyoming+'%0d%0A%0d%0AColorado Challenges and Strategies:%0d%0A'+colorado+'%0d%0A%0d%0ANorth Dakota Challenges and Strategies:%0d%0A'+northdakota+'%0d%0A%0d%0AOregon Challenges and Strategies:%0d%0A'+oregon+'%0d%0A%0d%0AMichigan Challenges and Strategies:%0d%0A'+michigan+'%0d%0A%0d%0AFlorida Challenges and Strategies:%0d%0A'+florida+'%0d%0A%0d%0AArizona Challenges and Strategies:%0d%0A'+arizona+'%0d%0A%0d%0ANorth Carolina Challenges and Strategies:%0d%0A'+northcarolina+'%0d%0A%0d%0AConcluding Question One:%0d%0A'+concludingquestionone+'%0d%0A%0d%0AConcluding Question Two:%0d%0A'+concludingquestiontwo;
win=window.open(mailto_link,'emailWin');
}

