
import React from 'react';
import { Language } from '../types';

interface FinalConfessionProps {
  lang: Language;
}

const FinalConfession: React.FC<FinalConfessionProps> = ({ lang }) => {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-10 pb-6">
      <div className="bg-white/80 border-2 border-dashed border-[#8B5E3C]/20 rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden group">
        <div className="absolute -top-4 -left-4 text-4xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform">🌿</div>
        <div className="absolute -bottom-4 -right-4 text-4xl opacity-10 -rotate-12 group-hover:rotate-0 transition-transform">🍂</div>
        
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">💌</span>
          <h2 className="text-2xl font-bold text-[#8B5E3C]">
            {lang === 'vi' ? 'Lời tâm sự cuối cùng' : 'A Final Confession'}
          </h2>
        </div>

        <div className="text-[15px] leading-relaxed text-[#5D4037] space-y-5 font-medium italic">
          {lang === 'vi' ? (
            <>
              <p className="font-bold not-italic text-[#8B5E3C]">Hi, nếu ông còn lên trang này thì tui vẫn giữ đúng lời hứa — tui có để mục chúc Tết cho ông ở cuối trang này nè.</p>
              <p>Tui đã xóa hết liên lạc với ông rồi. Tui thấy cách đó là tốt nhất cho tui, và thật sự tui thấy mình ổn hơn nhiều. Ông đừng nghĩ gì hết nha. Tui chỉ muốn dứt hẳn thôi. Vì giờ tui nghiệm ra rằng còn giữ liên lạc là còn hy vọng. Mà muốn dập tắt hy vọng thì phải cắt hết.</p>
              <p>Tui mong gia đình ông luôn khỏe mạnh. Ông cũng vậy.</p>
              <p>Tui cảm ơn vì đã được gặp ông, được nói chuyện với ông suốt ba tháng đó. Cảm ơn ông nhiều lắm vì đã đem lại cho tui rất nhiều niềm vui.</p>
              <p>Tui biết lúc này lẽ ra tui nên im lặng thôi. Nhưng tui lại có cái tật hay stalk, hay suy nghĩ lung tung. Nên tui xóa hết, để tui thực sự được bình yên. Tui mong làm vậy thì tâm tui sẽ lặng xuống.</p>
              <p>Mong những điều tốt đẹp luôn đến với ông. Thật khỏe mạnh và hạnh phúc.</p>
              <p>Nếu sau này lỡ vẫn còn duyên gặp lại — vì tui đâu biết trước được — thì nếu ông từng tức giận hay khó chịu vì tui, ông cứ thể hiện. Tui biết có lúc tui đáng ghét lắm. Tui ích kỷ, vì nghĩ cho mình là chính.</p>
              <p>Nhưng thật sự tui đã rất mệt mỏi với cuộc sống của riêng tui rồi. Tui nghĩ cách tốt nhất là cứ cách xa. Dù vậy, tui vẫn luôn cầu bình an cho ông.</p>
              <p>Đây có lẽ là lời cuối cùng tui gửi cho ông. Ông muốn block tui hay gì cũng được, tui cũng cảm ơn luôn. Vì như vậy tui sẽ không còn cơ hội stalk nữa, tui sẽ thật sự dứt hẳn.</p>
              <p className="font-bold">Đây là lần tâm sự cuối cùng nha.</p>
              <p>Thật ra một tháng nay tui cũng đã dần buông rồi. Nhưng vẫn có lúc tui bị ám ảnh. Có lúc tui còn nghĩ liệu tui có làm ông sợ mà chạy mất không. Haha. Nhờ ông mà tui đi coi bói, biết đường tình duyên tui chắc cũng trầy trật dữ lắm. Có khi nhờ ông mà sau này tui đi tu dễ hơn cũng nên. Không phải ông tệ đâu. Tui chỉ là sợ tui lại phải lâm vào tình trạng tinh thần tương tự thôi.</p>
              <p>Có lẽ từ trước tới giờ tui ế là vì ông trời đang bảo vệ trái tim “thủy tinh” của tui. Ông đến làm nó vui lên rất nhiều, nhưng cũng có lúc làm nó trùng xuống rất nhiều. Với bộ não 99 kịch bản máu chó của tui, nó nát bấy luôn. Tui nghĩ đường tình duyên tui không đẹp là do tui thôi. Mà sửa chắc cũng khó.</p>
              <p>Tui không buồn vì ông không thích tui đâu. Nghe hoàn cảnh của ông xong, tui chỉ thấy buồn cho ông thôi. Nhưng tui bất lực, không biết an ủi sao, không biết làm gì. Rồi ông biến mất. Rồi tui lại suy nghĩ mông lung, không xác định rõ. Tới mức trong mơ tui cũng thấy ông. Tui tra trong google thì nó bảo rằng tui vẫn còn nhớ ông rất nhiều nên lại mơ thấy.</p>
              <p>Tui không phải dạng lo chuyện bao đồng. Nhưng chắc khi thích ai đó, tui quan tâm hơi quá. Và thật sự thì mệt lắm.</p>
              <p>Tui từng nghĩ cứ để mối quan hệ ở đó rồi tui sẽ hết thích. Nhưng được cái tui lì. Bạn tui chửi tui ngu hoài. Nó hỏi tui thích cái gì mà giờ còn thích. Tui cũng không biết nữa. Có lẽ là cứ thích vậy thôi mà đó nghiệp duyên tui phải trả. Nhắc lại nha — ông không xấu. Mọi đau khổ này là do tui tự gây ra thôi.</p>
              <p className="text-[#8B5E3C] font-bold">Tui hứa với chính tui là tui sẽ không thích ông nữa. Cũng sẽ không suy nghĩ nhiều về ông nữa.</p>
              <p>Ông giống như một cơn bão trong đời tui vậy. Đến đột ngột, đi cũng đột ngột. Ông không cố ý, nhưng thiệt hại tinh thần thì thật sự rất lớn.</p>
              <p>Giờ có những người bạn trên Studystream, tui nhìn thấy họ lại nhớ đến ông. Tới mức tui có một nỗi sợ rất mạnh. Tui block hoặc unfollow rất nhiều người, dù họ chẳng làm gì tui cả. Chỉ vì nhìn họ là tui không ổn tâm lý. Có lúc là nhớ ông. Có lúc là khó chịu vô hình, nhưng lại dính dáng chút tới ông.</p>
              <p>Chắc người ta sẽ nghĩ tui bị khùng hay bị sảng gì đó mà tự nhiên lại hành xử rất bốc đồng như vậy. Tui nghĩ tui sẽ không quan tâm lắm nhưng tui cũng có quan tâm ánh mắt người ta phán xét nha nhưng tui vẫn làm vậy để tui khỏe hơn. Tui nghĩ thần kinh tui không khỏe mạnh lắm nên mới bị ảnh hưởng như vậy. Nếu ông chưa từng xuất hiện, có lẽ tui không tới mức này. Nhưng cũng nhờ vậy mà tui biết mình phải trang bị cho bản thân thật nhiều điều, để không dễ bị tác động nữa.</p>
              <p>Có thể giờ tui trên Studystream bị nhiều người ghét lắm. Tự nhiên unfollow, block hàng loạt. Nhưng thôi kệ. Miễn tui thấy khỏe. Coi như lọc bớt để đón năm mới.</p>
              <p>Tui nghĩ tất cả là điều tui phải lớn lên và học hỏi. Nhờ ông mà tui biết cách phòng thủ với mấy người sau. Nhờ ông mà giờ ai nói chuyện với tui là tui bơ đẹp. Cũng tốt. Tiết kiệm thời gian.</p>
              <p>Tui học được nhiều điều khi ông đến và đi lắm. Tui nhìn rõ những tính xấu của mình: tự ti, ganh tị, mặc cảm, nhạy cảm. Có một thời gian tui nghe kinh Phật rất nhiều để tự giải thoát. Và tui biết tất cả là do tui tham. Cái tham làm tui đau khổ, không phải ông.</p>
              <p>Tui tham một người nói chuyện. Tham một người dịu dàng. Tham nhiều thứ mình không kiểm soát được. Và nó khiến tui gục ngã. Nhưng nhờ vậy tui hiểu mình hơn, tu tập hơn, cố gắng tích phước hơn để bù lại những lần tui vô tình làm tổn thương người khác vì sự nhỏ nhen của mình. Tui vẫn còn rất tệ, nhưng tui cũng chỉ là một con người bình thường thôi. Có gì hoan hỉ nha.</p>
              <p>Có lúc tui thấy thật bất công. Ông là người chủ động làm bạn, cũng là người chủ động rời đi. Tui thì bị động hết, cả trong tổn thương. Nhưng suy cho cùng, không ai làm tui đau nếu tui không để tâm và không mong đợi quá nhiều. Nhờ ông mà tui biết mình tham và mong cầu như thế nào.</p>
              <p>Nhưng cảm ơn ông đã đến. Đó vẫn là một khoảng thời gian rất đẹp của tui.</p>
              <p>Tan nát con tim nhiều chút, nhưng học được nhiều bài học, có kỷ niệm đẹp. Tui chấp nhận được.</p>
              <p>Chắc sẽ không gặp lại nữa đâu nhỉ. Thôi thì những điều đẹp nhất đến với ông.</p>
              <p>Tui xin lỗi vì khoảng thời gian này tui cũng chửi ông dữ lắm — nhưng là kiểu “sao mà xuất hiện hoài vậy” thôi, chứ không có gì ác ý đâu.</p>
              <p>Nhờ ông mà giờ tui đóng cửa lòng rồi. Chắc ít nhất tới 27 tuổi mới mở lại. Nhưng thôi, coi như giờ tui có 100% công lực cho học tập và công việc. Ước mơ phú bà bớt một trở ngại.</p>
              <p className="font-bold text-[#8B5E3C]">Viết tới đây tui nhẹ lòng lắm. Không gặp lại cũng tốt. Đôi khi đến đây là đẹp rồi.</p>
              <p>Nếu có gặp lại, tui không biết. Tới lúc đó tính. Nhưng nếu gặp lại, tui mong lúc đó mọi thứ của ông đều tốt đẹp. Và thật sự nếu gặp lại tui mong thấy một tui thật trưởng thành, sâu sắc, hành xử chừng mực hơn và một ông khỏe mạnh, hạnh phúc dù lúc đó ông ghét tui cũng được. Có thể ông sẽ không liếc nhìn tui đâu, haha. Không sao. Lúc đó chắc tui cũng hết tình cảm rồi. Nếu hết tình cảm thì tui cũng lạnh lắm. Còn nếu mà còn tình cảm… thôi chắc tui tự cúng mình luôn quá.</p>
              <p>Viết xong tui thấy mình cũng tử tế ghê. Lêu lêu, ông mất một người tử tế thích mình rồi đó.</p>
              <p>Nếu được quay lại ngày đầu tiên, có khi tui sẽ không rep tin nhắn ông. Khoảng thời gian đầu rất đẹp, nhưng đoạn sau mệt quá. Đây là lần đầu tiên tui thật sự thích một người. Với tư cách là “newbie”, phát súng đầu tiên này làm tui hãi luôn. Vì tui khá tệ trong tình cảm — tệ với bản thân và với người mình thích.</p>
              <p>Có lẽ nếu không rep tin nhắn lúc đó, giờ tui đã không ám ảnh như vậy. Nhưng trong lòng tui vẫn mong nếu quay lại, tui sẽ cư xử trưởng thành hơn, đối tốt hơn với ông, bớt bốc đồng hơn, và biết chăm sóc sức khỏe tinh thần của mình hơn.</p>
              <p>Có khi ông chẳng bao giờ mở lại trang này đâu. Nhưng tui vẫn viết, vì tui muốn rõ ràng với chính mình.</p>
              <p>Quen mới hơn ba tháng mà tui tưởng như mấy năm. Viết dài quá trời. Nhưng chắc khoa học nói đúng - ba tháng đầu não bộ là lúc tình cảm nhiều nhất, nên đau cũng nhiều.</p>
              <p className="font-bold">Thôi, bái bai.</p>
              <p className="text-[11px] opacity-60">Có thể ông sẽ bảo tui hãm l đấy nhỉ? Tui đoán được đấy. Mà thôi sao cũng được, vì tui cũng xứng với danh xưng đó.</p>
            </>
          ) : (
            <>
              <p className="font-bold not-italic text-[#8B5E3C]">Hi, if you are still checking this page, I am keeping my promise — you can find my New Year wishes for you at the bottom of this page.</p>
              <p>I’ve deleted all contacts with you. I feel this is best for me, and honestly, I’m doing much better. Please don’t overthink it. I just want a clean break. Because now I realize that staying in touch is keeping hope alive. And to extinguish that hope, I have to cut everything off.</p>
              <p>I wish your family health. You as well.</p>
              <p>Thank you for meeting you and talking to you during those three months. Thank you so much for bringing me so much joy.</p>
              <p>I know at this moment I should probably just stay silent. But I have this habit of stalking and overthinking. So I deleted it all, so I could truly find peace. I hope doing this will calm my soul.</p>
              <p>May good things always come to you. Stay healthy and happy.</p>
              <p>If by some chance our paths cross again — because I don’t know what the future holds — if you were ever angry or annoyed with me, feel free to show it. I know I was quite annoying at times. I was selfish, mostly thinking about myself.</p>
              <p>But honestly, I was already so exhausted with my own life. I think the best way is to keep distance. Still, I always pray for your peace.</p>
              <p>This is probably the last message I send to you. You can block me or do whatever you want, and I’ll thank you for it. Because then I won’t have the chance to stalk anymore, and I’ll truly be done.</p>
              <p className="font-bold">This is the final confession.</p>
              <p>Honestly, I’ve been letting go for a month now. But sometimes I’m still haunted. Sometimes I wonder if I scared you away. Haha. Thanks to you, I went to a fortune teller and found out my love life is going to be quite rocky. Maybe thanks to you, it’ll be easier for me to become a nun later. It's not that you were bad. I'm just afraid of falling into the same mental state again.</p>
              <p>Maybe I’ve been single all this time because the universe was protecting my "glass" heart. You came and made it very happy, but also made it drop very low. With my brain and its 99 drama scripts, it was shattered. I think my love life isn't beautiful because of me. And fixing it is probably hard.</p>
              <p>I’m not sad because you don’t like me. After hearing about your situation, I just felt sad for you. But I was helpless, didn’t know how to comfort you, didn’t know what to do. Then you disappeared. And I overthought everything, uncertain. Even in my dreams, I saw you. Google says it’s because I still remember you too much.</p>
              <p>I’m not the type to interfere in others' business. But I guess when I like someone, I care a bit too much. And honestly, it’s exhausting.</p>
              <p>I used to think that just leaving the relationship as it was would make the feelings fade. But I’m stubborn. My friends kept calling me stupid. They asked what I even like about you to still feel this way. I don’t know either. Maybe it’s just a karmic debt I have to pay. Repeating this — you aren’t bad. All this suffering is self-inflicted.</p>
              <p className="text-[#8B5E3C] font-bold">I promised myself I won’t like you anymore. I won’t think about you much either.</p>
              <p>You were like a storm in my life. Arrived suddenly, left suddenly. You didn’t mean it, but the mental damage was truly great.</p>
              <p>Now when I see friends on Studystream, they remind me of you. To the point where I have a very strong fear. I blocked or unfollowed many people, even though they did nothing to me. Just seeing them makes me mentally unstable. Sometimes I miss you. Sometimes it’s an invisible discomfort linked to you. People probably think I’m crazy or delusional to act so impulsively. I think I shouldn't care much, but I do care about their judgment; however, I still did it to feel better. I think my nerves aren’t very healthy to be affected like this. If you had never appeared, maybe I wouldn’t be like this. But thanks to that, I know I need to equip myself with many things, to not be so easily affected.</p>
              <p>Maybe many people on Studystream hate me now. Unfollowing and blocking in bulk. But whatever. As long as I feel healthy. Think of it as filtering to welcome the new year.</p>
              <p>I think it’s all something I must grow up and learn from. Thanks to you, I know how to defend against the next ones. Thanks to you, now when someone talks to me, I ignore them. Good. Saves time.</p>
              <p>I learned so many things when you came and left. I see my bad traits clearly: insecurity, jealousy, complex, sensitivity. For a while, I listened to Buddhist sutras a lot to free myself. And I know it’s all due to my greed. Greed made me suffer, not you.</p>
              <p>Greedy for someone to talk to. Greedy for someone gentle. Greedy for many things I couldn't control. And it made me fall. But because of that, I understand myself better, practice more, try to accumulate more merits to make up for the times I accidentally hurt others because of my pettiness. I’m still very flawed, but I’m just a normal human. Please be forgiving.</p>
              <p>Sometimes I find it so unfair. You were the one who initiated the friendship, and the one who initiated leaving. I was passive in everything, even in the pain. But in the end, no one hurts me if I don’t care and don’t expect too much. Thanks to you, I know how greedy and demanding I am.</p>
              <p>But thank you for coming. That was still a very beautiful time for me.</p>
              <p>Heartbroken quite a bit, but learned many lessons, had beautiful memories. I can accept it.</p>
              <p>We probably won't meet again, right? Well, may the best things come to you.</p>
              <p>I’m sorry because during this time I also cursed you out quite a bit — but it was just like "why do you keep showing up," nothing malicious.</p>
              <p>Thanks to you, my heart is closed now. Probably at least until I’m 27 before I open it again. But whatever, consider it as having 100% power for studying and work now. One less obstacle for the dream of being a rich woman.</p>
              <p className="font-bold text-[#8B5E3C]">Writing this makes me feel much lighter. Not meeting again is also good. Sometimes it’s beautiful just ending here.</p>
              <p>If we do meet again, I don’t know. We'll see. But if it happens, I hope everything for you is good. And honestly, I hope to see a mature, deep version of me, acting more appropriately, and a healthy, happy you — even if you hate me then. Maybe you won't even look at me, haha. No matter. By then, my feelings will likely be gone. If the feelings are gone, I'll be very cold. If I still have feelings... well, I might as well perform a ritual for myself.</p>
              <p>After writing this, I feel I’m quite kind. Lêu lêu, you lost a kind person who liked you.</p>
              <p>If I could go back to the first day, maybe I wouldn’t reply to your message. The beginning was beautiful, but the later part was too tiring. This was the first time I truly liked someone. As a "newbie," this first shot really scared me. Because I'm quite bad at love — bad for myself and for the person I like.</p>
              <p>Maybe if I hadn't replied then, I wouldn't be so obsessed now. But in my heart, I still hope if I could go back, I would behave more maturely, treat you better, be less impulsive, and know how to take care of my mental health better.</p>
              <p>Maybe you'll never open this page again. But I'm still writing, because I want to be clear with myself.</p>
              <p>Known for just over three months but feels like years. Wrote so much. But maybe science is right — the first three months are when the brain is most emotional, so the pain is also great.</p>
              <p className="font-bold">Well, bye-bye.</p>
              <p className="text-[11px] opacity-60">Maybe you'll call me a jerk? I can guess that. But whatever, because I probably deserve that title too.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalConfession;
