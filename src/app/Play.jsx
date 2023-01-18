import React from 'react';
import nextIcon from '../assets/next.png';
import styling from '../mobileStyles/levels.module.css';

const allWordsByLevel = [
  [
    { word: 'be' },
    { word: 'and' },
    { word: 'of' },
    { word: 'a' },
    { word: 'in' },
    { word: 'to' },
    { word: 'have' },
    { word: 'too' },
    { word: 'it' },
    { word: 'I' },
    { word: 'that' },
    { word: 'for' },
    { word: 'you' },
    { word: 'he' },
    { word: 'with' },
    { word: 'on' },
    { word: 'do' },
    { word: 'say' },
    { word: 'this' },
    { word: 'they' },
  ],
  [
    { word: 'at' },
    { word: 'but' },
    { word: 'we' },
    { word: 'his' },
    { word: 'from' },
    { word: 'that' },
    { word: 'not' },
    { word: 'can’t' },
    { word: 'won’t' },
    { word: 'by' },
    { word: 'she' },
    { word: 'or' },
    { word: 'as' },
    { word: 'what' },
    { word: 'go' },
    { word: 'their' },
    { word: 'can' },
    { word: 'who' },
    { word: 'get' },
    { word: 'if' },
  ],
  [
    { word: 'would' },
    { word: 'her' },
    { word: 'all' },
    { word: 'my' },
    { word: 'make' },
    { word: 'about' },
    { word: 'know' },
    { word: 'will' },
    { word: 'as' },
    { word: 'up' },
    { word: 'one' },
    { word: 'time' },
    { word: 'there' },
    { word: 'year' },
    { word: 'so' },
    { word: 'think' },
    { word: 'when' },
    { word: 'which' },
    { word: 'them' },
    { word: 'some' },
  ],
  [
    { word: 'me' },
    { word: 'people' },
    { word: 'take' },
    { word: 'out' },
    { word: 'into' },
    { word: 'just' },
    { word: 'see' },
    { word: 'him' },
    { word: 'your' },
    { word: 'come' },
    { word: 'could' },
    { word: 'now' },
    { word: 'than' },
    { word: 'like' },
    { word: 'other' },
    { word: 'how' },
    { word: 'then' },
    { word: 'its' },
    { word: 'our' },
    { word: 'two' },
  ],
  [
    { word: 'more' },
    { word: 'these' },
    { word: 'want' },
    { word: 'way' },
    { word: 'look' },
    { word: 'first' },
    { word: 'also' },
    { word: 'new' },
    { word: 'because' },
    { word: 'day' },
    { word: 'more' },
    { word: 'use' },
    { word: 'no' },
    { word: 'man' },
    { word: 'find' },
    { word: 'here' },
    { word: 'thing' },
    { word: 'give' },
    { word: 'many' },
    { word: 'well' },
  ],
  [
    { word: 'only' },
    { word: 'those' },
    { word: 'tell' },
    { word: 'one' },
    { word: 'very' },
    { word: 'her' },
    { word: 'even' },
    { word: 'back' },
    { word: 'any' },
    { word: 'good' },
    { word: 'woman' },
    { word: 'through' },
    { word: 'us' },
    { word: 'life' },
    { word: 'child' },
    { word: 'there' },
    { word: 'work' },
    { word: 'down' },
    { word: 'may' },
    { word: 'after' },
  ],
  [
    { word: 'should' },
    { word: 'call' },
    { word: 'world' },
    { word: 'over' },
    { word: 'school' },
    { word: 'still' },
    { word: 'try' },
    { word: 'in' },
    { word: 'as' },
    { word: 'last' },
    { word: 'ask' },
    { word: 'need' },
    { word: 'too' },
    { word: 'feel' },
    { word: 'three' },
    { word: 'when' },
    { word: 'state' },
    { word: 'never' },
    { word: 'become' },
    { word: 'between' },
  ],
  [
    { word: 'high' },
    { word: 'really' },
    { word: 'something' },
    { word: 'most' },
    { word: 'another' },
    { word: 'much' },
    { word: 'family' },
    { word: 'own' },
    { word: 'out' },
    { word: 'leave' },
    { word: 'put' },
    { word: 'old' },
    { word: 'while' },
    { word: 'mean' },
    { word: 'on' },
    { word: 'keep' },
    { word: 'student' },
    { word: 'why' },
    { word: 'let' },
    { word: 'great' },
  ],
  [
    { word: 'same' },
    { word: 'big' },
    { word: 'group' },
    { word: 'begin' },
    { word: 'seem' },
    { word: 'country' },
    { word: 'help' },
    { word: 'talk' },
    { word: 'where' },
    { word: 'turn' },
    { word: 'problem' },
    { word: 'every' },
    { word: 'start' },
    { word: 'hand' },
    { word: 'might' },
    { word: 'American' },
    { word: 'show' },
    { word: 'part' },
    { word: 'about' },
    { word: 'against' },
  ],
  [
    { word: 'place' },
    { word: 'over' },
    { word: 'such' },
    { word: 'again' },
    { word: 'few' },
    { word: 'case' },
    { word: 'most' },
    { word: 'week' },
    { word: 'company' },
    { word: 'where' },
    { word: 'system' },
    { word: 'each' },
    { word: 'right' },
    { word: 'program' },
    { word: 'hear' },
    { word: 'so' },
    { word: 'question' },
    { word: 'during' },
    { word: 'work' },
    { word: 'play' },
  ],
  [
    { word: 'government' },
    { word: 'run' },
    { word: 'small' },
    { word: 'number' },
    { word: 'off' },
    { word: 'always' },
    { word: 'move' },
    { word: 'like' },
    { word: 'night' },
    { word: 'live' },
    { word: 'Mr.' },
    { word: 'point' },
    { word: 'believe' },
    { word: 'hold' },
    { word: 'today' },
    { word: 'bring' },
    { word: 'happen' },
    { word: 'next' },
    { word: 'without' },
    { word: 'before' },
  ],
  [
    { word: 'large' },
    { word: 'all' },
    { word: 'million' },
    { word: 'must' },
    { word: 'home' },
    { word: 'under' },
    { word: 'water' },
    { word: 'room' },
    { word: 'write' },
    { word: 'mother' },
    { word: 'area' },
    { word: 'national' },
    { word: 'money' },
    { word: 'story' },
    { word: 'young' },
    { word: 'fact' },
    { word: 'month' },
    { word: 'different' },
    { word: 'lot' },
    { word: 'right' },
  ],
  [
    { word: 'study' },
    { word: 'book' },
    { word: 'eye' },
    { word: 'job' },
    { word: 'word' },
    { word: 'though' },
    { word: 'business' },
    { word: 'issue' },
    { word: 'side' },
    { word: 'kind' },
    { word: 'four' },
    { word: 'head' },
    { word: 'far' },
    { word: 'black' },
    { word: 'long' },
    { word: 'both' },
    { word: 'little' },
    { word: 'house' },
    { word: 'yes' },
    { word: 'after' },
  ],
  [
    { word: 'since' },
    { word: 'long' },
    { word: 'provide' },
    { word: 'service' },
    { word: 'around' },
    { word: 'friend' },
    { word: 'important' },
    { word: 'father' },
    { word: 'sit' },
    { word: 'away' },
    { word: 'until' },
    { word: 'power' },
    { word: 'hour' },
    { word: 'game' },
    { word: 'often' },
    { word: 'yet' },
    { word: 'line' },
    { word: 'political' },
    { word: 'end' },
    { word: 'among' },
  ],
  [
    { word: 'ever' },
    { word: 'stand' },
    { word: 'bad' },
    { word: 'lose' },
    { word: 'however' },
    { word: 'member' },
    { word: 'pay' },
    { word: 'law' },
    { word: 'meet' },
    { word: 'car' },
    { word: 'city' },
    { word: 'almost' },
    { word: 'include' },
    { word: 'continue' },
    { word: 'set' },
    { word: 'later' },
    { word: 'community' },
    { word: 'much' },
    { word: 'name' },
    { word: 'five' },
  ],
  [
    { word: 'once' },
    { word: 'white' },
    { word: 'least' },
    { word: 'president' },
    { word: 'learn' },
    { word: 'real' },
    { word: 'change' },
    { word: 'team' },
    { word: 'minute' },
    { word: 'best' },
    { word: 'several' },
    { word: 'idea' },
    { word: 'kid' },
    { word: 'body' },
    { word: 'information' },
    { word: 'nothing' },
    { word: 'ago' },
    { word: 'right' },
    { word: 'lead' },
    { word: 'social' },
  ],
  [
    { word: 'understand' },
    { word: 'whether' },
    { word: 'back' },
    { word: 'watch' },
    { word: 'together' },
    { word: 'follow' },
    { word: 'around' },
    { word: 'parent' },
    { word: 'only' },
    { word: 'stop' },
    { word: 'face' },
    { word: 'anything' },
    { word: 'create' },
    { word: 'public' },
    { word: 'already' },
    { word: 'speak' },
    { word: 'others' },
    { word: 'read' },
    { word: 'level' },
    { word: 'allow' },
  ],
  [
    { word: 'add' },
    { word: 'office' },
    { word: 'spend' },
    { word: 'door' },
    { word: 'health' },
    { word: 'person' },
    { word: 'art' },
    { word: 'sure' },
    { word: 'such' },
    { word: 'war' },
    { word: 'history' },
    { word: 'party' },
    { word: 'within' },
    { word: 'grow' },
    { word: 'result' },
    { word: 'open' },
    { word: 'change' },
    { word: 'morning' },
    { word: 'walk' },
    { word: 'reason' },
  ],
  [
    { word: 'low' },
    { word: 'win' },
    { word: 'research' },
    { word: 'girl' },
    { word: 'guy' },
    { word: 'early' },
    { word: 'food' },
    { word: 'before' },
    { word: 'moment' },
    { word: 'himself' },
    { word: 'air' },
    { word: 'teacher' },
    { word: 'force' },
    { word: 'offer' },
    { word: 'enough' },
    { word: 'both' },
    { word: 'education' },
    { word: 'across' },
    { word: 'although' },
    { word: 'remember' },
  ],
  [
    { word: 'foot' },
    { word: 'second' },
    { word: 'boy' },
    { word: 'maybe' },
    { word: 'toward' },
    { word: 'able' },
    { word: 'age' },
    { word: 'off' },
    { word: 'policy' },
    { word: 'everything' },
    { word: 'love' },
    { word: 'process' },
    { word: 'music' },
    { word: 'including' },
    { word: 'consider' },
    { word: 'appear' },
    { word: 'actually' },
    { word: 'buy' },
    { word: 'probably' },
    { word: 'human' },
  ],
  [
    { word: 'wait' },
    { word: 'serve' },
    { word: 'market' },
    { word: 'die' },
    { word: 'send' },
    { word: 'expect' },
    { word: 'home' },
    { word: 'sense' },
    { word: 'build' },
    { word: 'stay' },
    { word: 'fall' },
    { word: 'oh' },
    { word: 'nation' },
    { word: 'plan' },
    { word: 'cut' },
    { word: 'college' },
    { word: 'interest' },
    { word: 'death' },
    { word: 'course' },
    { word: 'someone' },
  ],
  [
    { word: 'experience' },
    { word: 'behind' },
    { word: 'reach' },
    { word: 'local' },
    { word: 'kill' },
    { word: 'six' },
    { word: 'remain' },
    { word: 'effect' },
    { word: 'use' },
    { word: 'yeah' },
    { word: 'suggest' },
    { word: 'class' },
    { word: 'control' },
    { word: 'raise' },
    { word: 'care' },
    { word: 'perhaps' },
    { word: 'little' },
    { word: 'late' },
    { word: 'hard' },
    { word: 'field' },
  ],
  [
    { word: 'else' },
    { word: 'pass' },
    { word: 'former' },
    { word: 'sell' },
    { word: 'major' },
    { word: 'sometimes' },
    { word: 'require' },
    { word: 'along' },
    { word: 'development' },
    { word: 'themselves' },
    { word: 'report' },
    { word: 'role' },
    { word: 'better' },
    { word: 'economic' },
    { word: 'effort' },
    { word: 'up' },
    { word: 'decide' },
    { word: 'rate' },
    { word: 'strong' },
    { word: 'possible' },
  ],
  [
    { word: 'heart' },
    { word: 'drug' },
    { word: 'show' },
    { word: 'leader' },
    { word: 'light' },
    { word: 'voice' },
    { word: 'wife' },
    { word: 'whole' },
    { word: 'police' },
    { word: 'mind' },
    { word: 'finally' },
    { word: 'pull' },
    { word: 'return' },
    { word: 'free' },
    { word: 'military' },
    { word: 'price' },
    { word: 'report' },
    { word: 'less' },
    { word: 'according' },
    { word: 'decision' },
  ],
  [
    { word: 'explain' },
    { word: 'son' },
    { word: 'hope' },
    { word: 'even' },
    { word: 'develop' },
    { word: 'view' },
    { word: 'relationship' },
    { word: 'carry' },
    { word: 'town' },
    { word: 'road' },
    { word: 'drive' },
    { word: 'arm' },
    { word: 'true' },
    { word: 'federal' },
    { word: 'break' },
    { word: 'better' },
    { word: 'difference' },
    { word: 'thank' },
    { word: 'receive' },
    { word: 'value' },
  ],
  [
    { word: 'international' },
    { word: 'building' },
    { word: 'action' },
    { word: 'full' },
    { word: 'model' },
    { word: 'join' },
    { word: 'season' },
    { word: 'society' },
    { word: 'because' },
    { word: 'tax' },
    { word: 'director' },
    { word: 'early' },
    { word: 'position' },
    { word: 'player' },
    { word: 'agree' },
    { word: 'especially' },
    { word: 'record' },
    { word: 'pick' },
    { word: 'wear' },
    { word: 'paper' },
  ],
  [
    { word: 'special' },
    { word: 'space' },
    { word: 'ground' },
    { word: 'form' },
    { word: 'support' },
    { word: 'event' },
    { word: 'official' },
    { word: 'whose' },
    { word: 'matter' },
    { word: 'everyone' },
    { word: 'center' },
    { word: 'couple' },
    { word: 'site' },
    { word: 'end' },
    { word: 'project' },
    { word: 'hit' },
    { word: 'base' },
    { word: 'activity' },
    { word: 'star' },
    { word: 'table' },
  ],
  [
    { word: 'need' },
    { word: 'court' },
    { word: 'produce' },
    { word: 'eat' },
    { word: 'American' },
    { word: 'teach' },
    { word: 'oil' },
    { word: 'half' },
    { word: 'situation' },
    { word: 'easy' },
    { word: 'cost' },
    { word: 'industry' },
    { word: 'figure' },
    { word: 'face' },
    { word: 'street' },
    { word: 'image' },
    { word: 'itself' },
    { word: 'phone' },
    { word: 'either' },
    { word: 'data' },
  ],
  [
    { word: 'cover' },
    { word: 'quite' },
    { word: 'picture' },
    { word: 'clear' },
    { word: 'practice' },
    { word: 'piece' },
    { word: 'land' },
    { word: 'recent' },
    { word: 'describe' },
    { word: 'product' },
    { word: 'doctor' },
    { word: 'wall' },
    { word: 'patient' },
    { word: 'worker' },
    { word: 'news' },
    { word: 'test' },
    { word: 'movie' },
    { word: 'certain' },
    { word: 'north' },
    { word: 'love' },
  ],
  [
    { word: 'personal' },
    { word: 'open' },
    { word: 'support' },
    { word: 'simply' },
    { word: 'third' },
    { word: 'technology' },
    { word: 'catch' },
    { word: 'step' },
    { word: 'baby' },
    { word: 'computer' },
    { word: 'type' },
    { word: 'attention' },
    { word: 'draw' },
    { word: 'film' },
    { word: 'Republican' },
    { word: 'tree' },
    { word: 'source' },
    { word: 'red' },
    { word: 'nearly' },
    { word: 'organization' },
  ],
  [
    { word: 'choose' },
    { word: 'cause' },
    { word: 'hair' },
    { word: 'look' },
    { word: 'point' },
    { word: 'century' },
    { word: 'evidence' },
    { word: 'window' },
    { word: 'difficult' },
    { word: 'listen' },
    { word: 'soon' },
    { word: 'culture' },
    { word: 'billion' },
    { word: 'chance' },
    { word: 'brother' },
    { word: 'energy' },
    { word: 'period' },
    { word: 'course' },
    { word: 'summer' },
    { word: 'less' },
  ],
  [
    { word: 'realize' },
    { word: 'hundred' },
    { word: 'available' },
    { word: 'plant' },
    { word: 'likely' },
    { word: 'opportunity' },
    { word: 'term' },
    { word: 'short' },
    { word: 'letter' },
    { word: 'condition' },
    { word: 'choice' },
    { word: 'place' },
    { word: 'single' },
    { word: 'rule' },
    { word: 'daughter' },
    { word: 'administration' },
    { word: 'south' },
    { word: 'husband' },
    { word: 'Congress' },
    { word: 'floor' },
  ],
  [
    { word: 'campaign' },
    { word: 'material' },
    { word: 'population' },
    { word: 'well' },
    { word: 'call' },
    { word: 'economy' },
    { word: 'medical' },
    { word: 'hospital' },
    { word: 'church' },
    { word: 'close' },
    { word: 'thousand' },
    { word: 'risk' },
    { word: 'current' },
    { word: 'fire' },
    { word: 'future' },
    { word: 'wrong' },
    { word: 'involve' },
    { word: 'defense' },
    { word: 'anyone' },
    { word: 'increase' },
  ],
  [
    { word: 'security' },
    { word: 'bank' },
    { word: 'myself' },
    { word: 'certainly' },
    { word: 'west' },
    { word: 'sport' },
    { word: 'board' },
    { word: 'seek' },
    { word: 'per' },
    { word: 'subject' },
    { word: 'officer' },
    { word: 'private' },
    { word: 'rest' },
    { word: 'behavior' },
    { word: 'deal' },
    { word: 'performance' },
    { word: 'fight' },
    { word: 'throw' },
    { word: 'top' },
    { word: 'quickly' },
  ],
  [
    { word: 'past' },
    { word: 'goal' },
    { word: 'second' },
    { word: 'bed' },
    { word: 'order' },
    { word: 'author' },
    { word: 'fill' },
    { word: 'represent' },
    { word: 'focus' },
    { word: 'foreign' },
    { word: 'drop' },
    { word: 'plan' },
    { word: 'blood' },
    { word: 'upon' },
    { word: 'agency' },
    { word: 'push' },
    { word: 'nature' },
    { word: 'color' },
    { word: 'no' },
    { word: 'recently' },
  ],
  [
    { word: 'store' },
    { word: 'reduce' },
    { word: 'sound' },
    { word: 'note' },
    { word: 'fine' },
    { word: 'before' },
    { word: 'near' },
    { word: 'movement' },
    { word: 'page' },
    { word: 'enter' },
    { word: 'share' },
    { word: 'than' },
    { word: 'common' },
    { word: 'poor' },
    { word: 'other' },
    { word: 'natural' },
    { word: 'race' },
    { word: 'concern' },
    { word: 'series' },
    { word: 'significant' },
  ],
  [
    { word: 'similar' },
    { word: 'hot' },
    { word: 'language' },
    { word: 'each' },
    { word: 'usually' },
    { word: 'response' },
    { word: 'dead' },
    { word: 'rise' },
    { word: 'animal' },
    { word: 'factor' },
    { word: 'decade' },
    { word: 'article' },
    { word: 'shoot' },
    { word: 'east' },
    { word: 'save' },
    { word: 'seven' },
    { word: 'artist' },
    { word: 'away' },
    { word: 'scene' },
    { word: 'stock' },
  ],
  [
    { word: 'career' },
    { word: 'despite' },
    { word: 'central' },
    { word: 'eight' },
    { word: 'thus' },
    { word: 'treatment' },
    { word: 'beyond' },
    { word: 'happy' },
    { word: 'exactly' },
    { word: 'protect' },
    { word: 'approach' },
    { word: 'lie' },
    { word: 'size' },
    { word: 'dog' },
    { word: 'fund' },
    { word: 'serious' },
    { word: 'occur' },
    { word: 'media' },
    { word: 'ready' },
    { word: 'sign' },
  ],
  [
    { word: 'thought' },
    { word: 'list' },
    { word: 'individual' },
    { word: 'simple' },
    { word: 'quality' },
    { word: 'pressure' },
    { word: 'accept' },
    { word: 'answer' },
    { word: 'hard' },
    { word: 'resource' },
    { word: 'identify' },
    { word: 'left' },
    { word: 'meeting' },
    { word: 'determine' },
    { word: 'prepare' },
    { word: 'disease' },
    { word: 'whatever' },
    { word: 'success' },
    { word: 'argue' },
    { word: 'cup' },
  ],
  [
    { word: 'particularly' },
    { word: 'amount' },
    { word: 'ability' },
    { word: 'staff' },
    { word: 'recognize' },
    { word: 'indicate' },
    { word: 'character' },
    { word: 'growth' },
    { word: 'loss' },
    { word: 'degree' },
    { word: 'wonder' },
    { word: 'attack' },
    { word: 'herself' },
    { word: 'region' },
    { word: 'television' },
    { word: 'box' },
    { word: 'TV' },
    { word: 'training' },
    { word: 'pretty' },
    { word: 'trade' },
  ],
  [
    { word: 'deal' },
    { word: 'election' },
    { word: 'everybody' },
    { word: 'physical' },
    { word: 'lay' },
    { word: 'general' },
    { word: 'feeling' },
    { word: 'standard' },
    { word: 'bill' },
    { word: 'message' },
    { word: 'fail' },
    { word: 'outside' },
    { word: 'arrive' },
    { word: 'analysis' },
    { word: 'benefit' },
    { word: 'name' },
    { word: 'sex' },
    { word: 'forward' },
    { word: 'lawyer' },
    { word: 'present' },
  ],
  [
    { word: 'section' },
    { word: 'environmental' },
    { word: 'glass' },
    { word: 'answer' },
    { word: 'skill' },
    { word: 'sister' },
    { word: 'PM' },
    { word: 'professor' },
    { word: 'operation' },
    { word: 'financial' },
    { word: 'crime' },
    { word: 'stage' },
    { word: 'ok' },
    { word: 'compare' },
    { word: 'authority' },
    { word: 'miss' },
    { word: 'design' },
    { word: 'sort' },
    { word: 'one' },
    { word: 'act' },
  ],
  [
    { word: 'ten' },
    { word: 'knowledge' },
    { word: 'gun' },
    { word: 'station' },
    { word: 'blue' },
    { word: 'state' },
    { word: 'strategy' },
    { word: 'little' },
    { word: 'clearly' },
    { word: 'discuss' },
    { word: 'indeed' },
    { word: 'force' },
    { word: 'truth' },
    { word: 'song' },
    { word: 'example' },
    { word: 'democratic' },
    { word: 'check' },
    { word: 'environment' },
    { word: 'leg' },
    { word: 'dark' },
  ],
  [
    { word: 'public' },
    { word: 'various' },
    { word: 'rather' },
    { word: 'laugh' },
    { word: 'guess' },
    { word: 'executive' },
    { word: 'set' },
    { word: 'study' },
    { word: 'prove' },
    { word: 'hang' },
    { word: 'entire' },
    { word: 'rock' },
    { word: 'design' },
    { word: 'enough' },
    { word: 'forget' },
    { word: 'since' },
    { word: 'claim' },
    { word: 'note' },
    { word: 'remove' },
    { word: 'manager' },
  ],
  [
    { word: 'help' },
    { word: 'close' },
    { word: 'sound' },
    { word: 'enjoy' },
    { word: 'network' },
    { word: 'legal' },
    { word: 'religious' },
    { word: 'cold' },
    { word: 'form' },
    { word: 'final' },
    { word: 'main' },
    { word: 'science' },
    { word: 'green' },
    { word: 'memory' },
    { word: 'card' },
    { word: 'above' },
    { word: 'seat' },
    { word: 'cell' },
    { word: 'establish' },
    { word: 'nice' },
  ],
  [
    { word: 'trial' },
    { word: 'expert' },
    { word: 'that' },
    { word: 'spring' },
    { word: 'firm' },
    { word: 'Democrat' },
    { word: 'radio' },
    { word: 'visit' },
    { word: 'management' },
    { word: 'care' },
    { word: 'avoid' },
    { word: 'imagine' },
    { word: 'tonight' },
    { word: 'huge' },
    { word: 'ball' },
    { word: 'no' },
    { word: 'close' },
    { word: 'finish' },
    { word: 'yourself' },
    { word: 'talk' },
  ],
  [
    { word: 'theory' },
    { word: 'impact' },
    { word: 'respond' },
    { word: 'statement' },
    { word: 'maintain' },
    { word: 'charge' },
    { word: 'popular' },
    { word: 'traditional' },
    { word: 'onto' },
    { word: 'reveal' },
    { word: 'direction' },
    { word: 'weapon' },
    { word: 'employee' },
    { word: 'cultural' },
    { word: 'contain' },
    { word: 'peace' },
    { word: 'head' },
    { word: 'control' },
    { word: 'base' },
    { word: 'pain' },
  ],
  [
    { word: 'apply' },
    { word: 'play' },
    { word: 'measure' },
    { word: 'wide' },
    { word: 'shake' },
    { word: 'fly' },
    { word: 'interview' },
    { word: 'manage' },
    { word: 'chair' },
    { word: 'fish' },
    { word: 'particular' },
    { word: 'camera' },
    { word: 'structure' },
    { word: 'politics' },
    { word: 'perform' },
    { word: 'bit' },
    { word: 'weight' },
    { word: 'suddenly' },
    { word: 'discover' },
    { word: 'candidate' },
  ],
  [
    { word: 'top' },
    { word: 'production' },
    { word: 'treat' },
    { word: 'trip' },
    { word: 'evening' },
    { word: 'affect' },
    { word: 'inside' },
    { word: 'conference' },
    { word: 'unit' },
    { word: 'best' },
    { word: 'style' },
    { word: 'adult' },
    { word: 'worry' },
    { word: 'range' },
    { word: 'mention' },
    { word: 'rather' },
    { word: 'far' },
    { word: 'deep' },
    { word: 'front' },
    { word: 'edge' },
  ],
  [
    { word: 'individual' },
    { word: 'specific' },
    { word: 'writer' },
    { word: 'trouble' },
    { word: 'necessary' },
    { word: 'throughout' },
    { word: 'challenge' },
    { word: 'fear' },
    { word: 'shoulder' },
    { word: 'institution' },
    { word: 'middle' },
    { word: 'sea' },
    { word: 'dream' },
    { word: 'bar' },
    { word: 'beautiful' },
    { word: 'property' },
    { word: 'instead' },
    { word: 'improve' },
    { word: 'stuff' },
    { word: 'claim' },
  ],
];
const wordLengthToFontSizeMap = {
  1: '87vw',
  2: '65vw',
  3: '47vw',
  4: '41vw',
  5: '33vw',
  6: '31vw',
  7: '24vw',
  8: '21vw',
  9: '18vw',
  10: '16vw',
  11: '16vw',
  12: '16vw',
  13: '16vw',
  14: '16vw',
};
export class Play extends React.Component {
  constructor(props) {
    super(props);
    this.words = allWordsByLevel[parseInt(localStorage.getItem('level')) - 1];
    if (this.words === undefined) {
      this.words = [
        {
          word: 'Wrong Level',
        },
      ];
    }

    this.state = {
      currentWord: this.words[Math.floor(Math.random() * this.words.length)],
    };
  }

  componentDidMount() {
    let timerDuration = parseInt(localStorage.getItem('timerDuration'));
    let disableTimer = JSON.parse(localStorage.getItem('disableTimer'));

    if (!disableTimer) {
      this.intervalId = setInterval(() => {
        this.setState({
          currentWord:
            this.words[Math.floor(Math.random() * this.words.length)],
        });
      }, timerDuration * 1000);
    }
  }
  setNewCurrentWord() {
    this.setState({
      currentWord: this.words[Math.floor(Math.random() * this.words.length)],
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div style={styles.container}>
        <div
          className="hoverAndMakeItBig"
          onClick={() => {
            window.location.href = '/level-selection';
          }}
          style={styles.level}
        >
          Level : {localStorage.getItem('level')}
        </div>
        <div
          className={`${styling.gradientText}`}
          style={{
            fontSize:
              wordLengthToFontSizeMap[this.state.currentWord.word.length],
          }}
        >
          {this.state.currentWord.word}
        </div>
        {/* <button
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Go Back
        </button> */}
        <img
          alt="next"
          className="hoverAndMakeItBig"
          onClick={() => {
            this.setNewCurrentWord();
          }}
          src={nextIcon}
          style={styles.nextIcon}
        />
        <img
          alt="back"
          className="rotate180"
          onClick={() => {
            window.location.href = '/';
          }}
          src={nextIcon}
          style={styles.backIcon}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    padding: '9px',
  },
  level: {
    fontSize: '5vh',
    color: '#3838c4',
    position: 'absolute',
    top: '10%',
  },
  nextIcon: {
    width: '5rem',
    height: '5rem',
    marginBottom: '2rem',
    position: 'absolute',
    right: '4%',
    top: '4%',
  },
  backIcon: {
    width: '5rem',
    height: '5rem',
    marginBottom: '2rem',
    position: 'absolute',
    bottom: '4%',
    left: '4%',
  },
};
