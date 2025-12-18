
import { Question, ContentItem } from './types';

export const COLORS = {
  cream: '#FFF9F0',
  brown: '#8B5E3C',
  green: '#2D5A27',
  red: '#E57373',
};

export interface CardType {
  id: string;
  icon: string;
  label: { vi: string; en: string };
  color: string;
}

export const CARD_TYPES: CardType[] = [
  { id: 'gentle', icon: '🍃', label: { vi: "Mong bạn nhẹ nhàng hơn một chút", en: "Something I hope you could be gentler about" }, color: '#C8E6C9' },
  { id: 'hidden', icon: '🍂', label: { vi: "Điều tui chưa dám nói", en: "Something I never dared to say" }, color: '#FFCCBC' },
  { id: 'understand', icon: '🌸', label: { vi: "Một điều tui mong bạn hiểu", en: "Something I wish you understood" }, color: '#F8BBD0' },
  { id: 'positive', icon: '⭐', label: { vi: "Một lời nhắn tích cực", en: "A positive message" }, color: '#FFF9C4' },
  { id: 'private', icon: '🌙', label: { vi: "Điều tui muốn giữ lại cho riêng mình", en: "Something I want to keep private" }, color: '#D1C4E9' },
];

export const BALLOON_PHRASES: ContentItem[] = [
  { vi: "ổn rồi", en: "it’s okay" },
  { vi: "cũng được", en: "not too bad" },
  { vi: "tạm ổn", en: "i’m getting by" },
  { vi: "chưa tệ lắm", en: "still okay" },
  { vi: "vậy là được rồi", en: "good enough for today" },
  { vi: "mệt xíu thôi", en: "a bit tired" },
  { vi: "hơi đuối", en: "feeling drained" },
  { vi: "cần nghỉ một chút", en: "need a short break" },
  { vi: "não hơi lag", en: "brain feels slow" },
  { vi: "thở chút đã", en: "just need to breathe" },
  { vi: "hơi buồn một chút", en: "a little sad" },
  { vi: "lòng không vui lắm", en: "feeling low" },
  { vi: "có chút trống rỗng", en: "a bit empty" },
  { vi: "hơi chùng xuống", en: "mood is heavy" },
  { vi: "chỉ là một ngày xám", en: "just a gray day" },
  { vi: "ráng thêm tí", en: "just a little more" },
  { vi: "từ từ thôi", en: "take it slow" },
  { vi: "chậm cũng được", en: "slowly is fine" },
  { vi: "một bước nhỏ thôi", en: "one small step" },
  { vi: "đừng bỏ ngang", en: "don’t stop yet" },
  { vi: "thả xuống cũng được", en: "it’s okay to let go" },
  { vi: "không giữ nữa", en: "you can release it" },
  { vi: "nghỉ tay một xíu", en: "take a break" },
  { vi: "không cần gồng", en: "you don’t have to be strong" },
  { vi: "bỏ xuống được rồi", en: "let it down" },
  { vi: "bạn làm được mà", en: "you’re doing fine" },
  { vi: "bạn đang cố rồi", en: "you’re trying" },
  { vi: "như vậy là tốt rồi", en: "that’s enough" },
  { vi: "bạn không một mình", en: "you’re not alone" },
  { vi: "đủ rồi đó", en: "you’re okay" },
];

export const CORKBOARD_NOTES: ContentItem[] = [
  // Nhóm 1: Nhắc nhở quen thuộc
  { vi: "Đừng quên ngủ đủ nha, thiếu ngủ hoài là người xuống sắc liền đó, mà còn hại sức khỏe nữa.", en: "Don’t forget to get enough sleep. Lack of sleep really shows — and it’s not good for your health either." },
  { vi: "Uống nước đi nè, uống đủ nước thì vừa khỏe người, vừa đỡ mệt, da cũng đẹp hơn nữa đó.", en: "Drink some water. Staying hydrated helps you feel better and look better too." },
  { vi: "Ăn uống đàng hoàng nha, ăn uống quyết định mình có đủ năng lượng để sống vui không đó.", en: "Eat properly, okay? Food gives you the energy to live and feel okay." },
  { vi: "Hít thở một cái đã, thở sâu một xíu thôi, rồi mình quay lại làm tiếp cũng được.", en: "Take a deep breath for a moment. Just one is enough — then you can continue." },
  { vi: "Đi giãn cơ xíu đi, để sau này không phải than đau lưng, đau cổ nghe chưa.", en: "Stretch a little. Your future back and neck will thank you." },
  { vi: "Tập thể dục nhẹ nhẹ thôi cũng được, cho người gọn gàng hơn mà tinh thần cũng khá lên nữa.", en: "Light exercise is fine. It helps both your body and your mood." },
  { vi: "Skincare đi nè, phải đẹp chứ, ít nhất là đẹp hơn những người mình không thích.", en: "Do your skincare. You deserve to look good — at least better than people you don’t like." },
  { vi: "Nghỉ 5 phút thôi cũng được, nhưng đừng lướt TikTok quá đà là được nha.", en: "Take a 5-minute break if you need to, just don’t get lost on TikTok for too long." },
  { vi: "Nếu có lỡ lướt TikTok rồi thì cũng đừng thấy tội lỗi, đôi khi mình cũng cần vui một chút mà.", en: "And if you do scroll a bit, don’t feel guilty. You’re allowed small joys." },
  
  // Nhóm 2: Nhắc nhẹ
  { vi: "Đừng tự trách nữa, nhìn cái mặt căng thẳng vậy không có đẹp đâu.", en: "Stop blaming yourself. That stressed face isn’t helping anyone — especially you." },
  { vi: "Không cần hoàn hảo đâu, hoàn hảo quá người ta lại nghi ngờ rồi làm khó mình đó.", en: "You don’t have to be perfect. Being “too perfect” only makes people suspicious." },
  { vi: "Hôm nay làm được vậy là đủ rồi, đủ mệt nhưng cũng đủ cố gắng mà, đúng không?", en: "What you did today is enough — tiring, but still meaningful." },
  { vi: "Chậm cũng được mà, đừng so cuộc sống của mình với người khác hoài.", en: "It’s okay to move slowly. Don’t keep comparing your life to others." },
  { vi: "Thả lỏng vai xuống xíu đi, đừng gồng như con rùa rụt cổ vậy chứ.", en: "Relax your shoulders a bit. No need to tense up like a hiding turtle." },
  { vi: "Ngồi thẳng lưng lên nè, cho cột sống được tử tế một chút.", en: "Sit up straight — your spine deserves better treatment." },
  { vi: "Đi bộ hay đi dạo một xíu cũng được, ở trong nhà hoài dễ buồn lắm đó.", en: "Take a short walk if you can. Staying inside too long makes everything heavier." },
  
  // Nhóm 3: Vui vui
  { vi: "Căng quá là tui méc mẹ bạn đó nha.", en: "If you stress too much, I’m telling your mom." },
  { vi: "Tự thưởng cho mình đi, đừng nghiêm khắc với bản thân hoài vậy.", en: "Reward yourself a little. You don’t have to be so strict with yourself all the time." },
  { vi: "Nay đẹp trai đó, công nhận luôn.", en: "Looking good today — yes, I mean it." },
  { vi: "Cười cái coi, cười lên cái là thấy dễ thương liền.", en: "Smile a bit. One smile already makes you cuter." },
  { vi: "Tối nay coi phim một xíu cho khuây khỏa đi, mấy bữa nay cày dữ quá rồi.", en: "Watch a movie tonight to relax. You’ve been working hard lately." },
  { vi: "Nếu mệt quá, uất ức quá hay tủi thân quá thì khóc một trận cho đã đi, đừng giữ trong lòng.", en: "If you’re exhausted, frustrated, or feeling small, go cry it out. Don’t keep it inside." },
  { vi: "Nay siêu nhân mạnh mẽ dữ nha, khen đó.", en: "You were such a strong superhero today — praise deserved." },
  { vi: "Nay giỏi ghê á, vượt qua thêm một ngày cực khổ nữa rồi.", en: "You did really well today, surviving another tough day." },
  { vi: "Lại thấy mình khổ rồi đúng không, lại muốn được ôm mẹ rồi chứ gì. Yên tâm nha, chuyện gì rồi cũng sẽ qua thôi.", en: "Feeling tired of life again and wanting a hug from your mom? It’s okay. Everything passes eventually." },
];

export const KEYWORDS = [
  { vi: "Cao", en: "Tall" },
  { vi: "Chăm chỉ", en: "Hard-working" },
  { vi: "Cầu tiến", en: "Ambitious" },
  { vi: "Nhường nhịn", en: "Patient" },
  { vi: "Mê sắc đẹp giống tui", en: "Loves beauty (like me)" },
  { vi: "Đẹp", en: "Handsome" },
  { vi: "Hiền", en: "Gentle" },
  { vi: "Ngơ", en: "Dazed" },
  { vi: "Sáng nắng chiều mưa", en: "Moody but cute" },
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    icon: '🐾',
    title: { vi: "Tâm sự nhỏ của tui", en: "A small confession from me" },
    content: {
      vi: "Tui hay bảo bạn xấu tính,\nchứ tui thấy tui mới là người xấu trong câu chuyện.\nTui thấy tui tệ nhiều lúc lắm,\nnhưng tui sợ bạn ghét tui lắm luôn á.\nMà lạ lắm, tui lại vừa sợ bạn ghét tui,\nvừa sợ thân with bạn hơn nữa.\nTui bị phụ thuộc cảm xúc dữ lắm.\nAi tui quan tâm là tui bị vậy hết trơn á.\nNên nhiều lúc bạn thấy tui bốc đồng,\ntrẻ con,\nhay đúng hơn là trẻ trâu đó…\nNếu được, bạn có thể dặn tui,\nchỉnh nết tui giúp tui được không?\nTui sợ bạn ghét tui lắm,\nvì tui cũng thương bạn nhiều lắm.\nTui không muốn bạn ghét tui dù chỉ một miếng nào hết á.\nNhưng tui huhu, tui cứ vậy hoài.\nTui xin lỗi nhaaaa.",
      en: "I often joke and say that you’re mean,\nbut honestly, I think I’m the difficult one.\nI mess up a lot sometimes,\nand I’m really scared that you might dislike me.\nWhat’s strange is that\nI’m scared of you disliking me,\nyet I’m also scared of getting closer to you.\nI get emotionally dependent very easily.\nAnyone I care about — I become like this.\nSo when I act impulsive, childish,\nor honestly… immature,\nif you can,\ncould you gently remind me and help me be better?\nI’m really scared you might hate me,\nbecause I care about you a lot.\nI don’t want you to dislike me,\nnot even a little bit.\nBut I keep being like this anyway.\nI’m sorry — truly."
    }
  },
  {
    id: 2,
    icon: '🐾',
    title: { vi: "Ấn tượng đầu của tui về bạn?", en: "My first impression of you?" },
    content: {
      vi: "Tui nhớ rất rõ lúc đó luôn.\nLúc đó tui đang ở trên lớp,\nvừa học vừa mệt,\nđầu óc thì rối,\nMà tui vẫn onstream cho đỡ buồn.\nTui lướt mấy người pin tui,\nthì tui thấy bạn.\n\nLúc đó tui kiểu:\n“Ủa… sao nhìn dễ thương dị trời?”\nNhìn hiền hiền,\ngương mặt tạo thiện cảm với tui.\nLúc đó tui chưa nói chuyện với bạn đâu,\nmới chỉ là ấn tượng bên ngoài thôi à.\n\nBình thường tui lười ghi pin reason lắm,\nlâu lâu mới nổi hứng ghi cho ai đó.\nVậy mà với bạn,\ntui ghi tới tận hai cái khoảng thời gian đó luôn.\n\nTui cũng muốn làm quen bạn trước lắm,\nnhưng tui ngại dữ lắm.\nTui gần như không bao giờ chủ động với ai hết trơn á.\n\nNên khi bạn là người bắt chuyện trước,\ntui vui dữ lắm luôn.\nKiểu vui mà không nói ra được,\nchỉ biết cười hoài thôi.\nNgày hôm đó tui cười nhiều lắm,\ndù trước đó tui overnight mệt muốn xỉu.",
      en: "I remember that moment very clearly.\n\nI was in class,\ntired and overwhelmed,\ntrying to study while streaming just to feel less lonely.\nI was scrolling through people who pinned me.\nAnd then I saw you.\n\nMy first thought was:\n“Wait… why does he look so cute, like a character?”\nYou looked gentle,\nthe kind of person who feels calm and easy to be around.\nAt that time, I didn’t even know you yet.\nIt was just a first impression.\n\nI rarely write pin reasons for people.\nI’m usually too lazy or too shy.\nBut for you,\nI wrote two during that time.\n\nI wanted to talk to you first,\nbut I was too shy.\nI almost never make the first move,\nexcept for work or studying.\n\nSo when you started the conversation,\nI felt genuinely happy.\nI couldn’t really say it out loud,\nI just kept smiling.\nThat day, I smiled so much,\neven though I was exhausted from staying up all night."
    }
  },
  {
    id: 3,
    icon: '🐾',
    title: { vi: "Bạn chó trong mắt tui là người như thế nào?", en: "What kind of person are you in my eyes?" },
    content: {
      vi: "Trong mắt tui,\nbạn cũng là một người nhiều tâm trạng giống tui.\nCảm xúc của bạn lên xuống như tàu lượn vậy đó.\n\nCó lúc bạn rất vui,\ncó lúc lại trầm xuống,\nim lặng hơn bình thường.\n\nNhưng tui thấy bạn là người dễ thương và ấm áp.\n\nBạn hơi hài nhạt một xíu,\nnhưng lại rất đúng lúc,\nnên nhiều khi tui cười cũng nhiều vì mấy câu đó.\n\nTui thích nhất là khi bạn chịu hợp tác diễn chung với tui.\nNhiều lúc tui nói không à,\nmà bạn vẫn chịu nghe,\nchịu trả lời,\nchịu ở lại nói chuyện.\n\nBạn hay nói với tui là\n“Buồn thì tâm sự với tui nè”,\nmà thiệt ra…\ntui không dám đâu.\nVì tui thấy bạn cũng rầu chết mồ.\nTui không muốn mang thêm tiêu cực cho bạn,\nnên nhiều lúc tui chọn im lặng.\n\nNhưng dù vậy,\ntui vẫn thấy bạn là người rất tử tế, và cảm ơn bạn nhiều nha.",
      en: "To me, you’re someone who feels deeply — just like me.\nYour emotions rise and fall like a roller coaster.\n\nSometimes you’re cheerful,\nsometimes quieter,\nmore withdrawn than usual.\n\nBut I see you as a warm and kind person.\nYour jokes are a bit dry sometimes,\nbut often perfectly timed,\nand they still make me smile.\n\nWhat I really like\nis that you’re willing to play along with my silliness.\nI talk a lot,\nand you still listen,\nstill reply,\nstill stay.\n\nYou often tell me,\n“If you’re sad, you can talk to me.”\nBut honestly…\nI’m scared to.\nBecause I know you carry your own sadness too.\nI don’t want to add more negativity to your life,\nso sometimes I choose silence.\n\nStill,\nI truly think you’re a very kind person, and thank you so much."
    }
  },
  {
    id: 4,
    icon: '🐾',
    title: { vi: "Một điều tui phải thú nhận…", en: "Something I must admit..." },
    content: {
      vi: "Có những lúc bạn thấy tui né bạn,\nhoặc cố tình tạo khoảng cách,\nthậm chí là loại bạn ra khỏi cuộc sống của tui.\n\nKhông phải vì tui ghét bạn đâu.\nLà vì tui sợ.\nTui sợ tui thích bạn.\nThích theo cái kiểu\nkhông còn đơn giản chỉ là bạn bè nữa.\n\nTui không quen with cảm xúc đó,\nmà tui cũng không giỏi xử lý nó.\nNên cách duy nhất tui nghĩ ra\nlà né tránh,\nlà cắt đi,\ndù trong lòng tui không hề nỡ.\n\nRồi tui lại hối hận,\nrồi lại quay về bình thường,\ncứ như vậy hoài —\nmột vòng lặp không dứt.\n\nCó lẽ tui cũng nhận ra\ntui không cứng rắn như tui vẫn nghĩ.\n\nNghe hơi hài đúng không?\n\nChắc do tui độc thân lâu quá,\ngặp ai tử tế một chút\nlà dễ crush người ta liền.\nMà còn chưa gặp ngoài đời nữa chứ.\nNhưng tui nghĩ tui cũng không phải là người\ndễ thích một ai đó như vậy,\nnên việc tui có cảm xúc with bạn\ncũng chứng tỏ\nbạn là một người rất có sức hút.\n\nTui nói ra không phải để bạn phải làm gì cả.\nTui chỉ muốn nhẹ lòng hơn thôi,\nvì with tui,\nthích một người\nlà chuyện khá nặng lòng.\n\nTui xin lỗi,\nvì tui là một con người chưa bao giờ quen ai.\n\nNên mỗi lần tui thích ai đó,\nphản xạ đầu tiên của tui\nlại là đẩy người ta ra xa.\n\nNhưng lần này,\ntui chọn nói ra.\nÍt nhất thì tui nghĩ\ntui đã dũng cảm hơn chính tui trước đây.\nVì trước giờ,\nmỗi lần thích ai\ntui đều im ru hết.\n\nVới lại,\ntui nghĩ rằng khi nói ra rồi,\ntui cũng đang trần thuật rõ ràng with chính tui,\nđể tự mình dễ đi qua\ngiai đoạn cảm nắng, trúng gió này hơn.\n\nThêm một điều nữa,\ntui nói ra sự thích này từ trong lòng.\nVì tui biết\nbạn là một người rất có giá trị,\nvà việc có người thích bạn\nlà điều rất bình thường —\nthậm chí là điều bạn cũng nên biết.\n\nNên nếu bạn đã biết rồi,\ntui mong bạn đừng gieo thêm hy vọng cho tui nha.\n\nNhân quả không chừa một ai đâu,\ngieo hy vọng cho người khác,\nrồi một ngày nào đó\nlại bị đối xử y chang như vậy đó.\n\nTui chỉ đơn phương thôi.\nTui không mong gì hơn,\n_chỉ mong bạn luôn vui vẻ là được rồi._",
      en: "There were times when you saw me avoiding you,\ncreating distance,\nor even trying to remove you from my life.\n\nIt wasn’t because I disliked you.\nI was scared.\nScared that I might like you —\nin a way that was no longer just friendship.\n\nI’m not used to those feelings,\nand I’m not good at handling them either.\nSo the only thing I knew how to do\nwas to avoid,\nto cut things off,\neven though my heart didn’t want to.\n\nThen I would regret it,\nreturn to normal,\nand repeat it all over again —\nlike an endless loop.\n\nI guess I slowly realized\nthat I’m not as strong as I thought I was.\n\nIt sounds a bit funny, doesn’t it?\n\nMaybe I've been single for too long.\nWhen I meet someone kind,\nI end up crushing too easily.\n\nAnd we haven’t even met in real life.\n\nStill, I don’t think I’m someone\nwho falls for people that easily,\nso having these feelings\nalso means\nyou’re someone with real charm.\n\nI’m not saying this for you to do anything.\nI just want to feel lighter.\nFor me,\nliking someone\nis a heavy feeling to carry.\nI’m sorry —\nI’m someone who has never been in a relationship before.\nSo whenever I like someone,\nmy first instinct\nis to push them away.\n\nBut this time,\nI chose to say it out loud.\nAt the very least,\nI think I was braver than my past self.\nBecause before this,\nevery time I liked someone,\nI stayed completely silent.\n\nI also believe that by saying it,\nI’m being honest with myself,\nmaking it easier\nto move through this phase of feelings.\n\nOne more thing —\nI’m expressing these feelings sincerely.\nBecause I know\nyou’re someone valuable,\nand being liked\nis nothing strange —\nit’s something you deserve to know.\n\nSo now that you know,\nplease don’t give me false hope.\n\nKarma never spares anyone.\nIf someone gives hope carelessly,\none day they may be treated the same way.\n\nThis is one-sided.\n\nI don't wish for anything more —\nI just hope you're happy."
    },
    warning: true
  },
  {
    id: 5,
    icon: '🐾',
    title: { vi: "Nếu hôm nay bạn buồn…", en: "If you’re feeling sad today" },
    content: {
      vi: "Nếu hôm nay bạn buồn,\nbạn có thể đọc mấy dòng này nha.\n\nBạn cố lên nha.\n\nTui luôn ủng hộ bạn.\nTui là một fan trung thành của bạn đó.\n\nTui sẽ động viên bạn\nnhư cách bạn từng luôn động viên tui.\n\nBạn là một người rất tuyệt vời rồi đó.\n\nĐôi khi ông trời\nkhông thể cho một người\nhết tất cả sự tuyệt vời được đâu.\n\nTui là rùa,\ncũng từng là bò —\nmột người bạn của bạn.\n\nDù chỉ là online thôi,\nnhưng tui cũng có khả năng\ntruyền động lực nhiều lắm luôn á.\n\nNên là ní hào, cố lên nha.\n\nĐôi khi con người thật của tui\nkhông đủ tích cực để truyền năng lượng for bạn,\nnên tui viết những dòng này ở đây.\n\nNếu bạn buồn,\nbạn đọc ở đây nha.",
      en: "If you’re feeling sad today,\nyou can read this.\n\nYou can do it.\n\nI’m always supporting you.\nI’m one of your most loyal fans.\n\nI’ll encourage you\nthe same way you’ve always encouraged me.\n\nYou’re already an amazing person.\n\nSometimes,\nthe universe can’t give one person\neverything perfectly.\n\nI’m the turtle,\nonce the cow —\nyour friend.\n\nEven if it’s only online,\nI can still send you strength.\n\nSo, hello — keep going.\n\nSometimes the real me\nisn’t positive enough to lift you up,\nso I left these words here instead.\n\nIf you’re sad,\ncome back and read this."
    }
  },
  {
    id: 6,
    icon: '🐾',
    title: { vi: "Nếu hôm nay bạn mệt…", en: "If you’re tired today" },
    content: {
      vi: "Nếu mệt rồi thì\nthì đi ăn gì đó đi nha,\nnghỉ ngơi một xíu.\n\nMình không cần phải cố hoài đâu.\n\nNghỉ rồi mình làm tiếp,\ntừ từ cũng được.",
      en: "If you’re tired today,\ngo eat something,\nrest for a bit.\n\nYou don’t have to push yourself all the time.\n\nWe can continue later.\nSlowly is okay."
    }
  },
  {
    id: 7,
    icon: '🐾',
    title: { vi: "Nếu hôm nay bạn thấy vui…", en: "If you’re feeling happy today" },
    content: {
      vi: "Hehe,\nvậy thì cố giữ niềm vui đó lâu lâu nha.\n\nMột người hay cười\nthì lúc nào cũng đẹp\nvà cuốn hút người khác hơn nhiều lắm á.",
      en: "Hehe,\nthen try to keep that happiness for as long as you can.\n\nSomeone who smiles often\nis always beautiful\nand naturally attractive."
    }
  }
];
