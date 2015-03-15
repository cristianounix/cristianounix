module Jekyll
  class PersonalTags < Liquid::Tag

    def initialize(tag_name, param, tokens)
      super
    end

    def render(context)
      Random.new.rand(1..2).to_s
    end
  end
end

Liquid::Template.register_tag('randBg', Jekyll::PersonalTags)